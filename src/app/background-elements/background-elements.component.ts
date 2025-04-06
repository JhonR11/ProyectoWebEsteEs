import { Component, type OnInit, type AfterViewInit, type OnDestroy, type ElementRef, ViewChild } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-background-elements",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./background-elements.component.html",
  styleUrls: ["./background-elements.component.css"],
})
export class BackgroundElementsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("canvas") canvasRef!: ElementRef<HTMLCanvasElement>

  codeLines: string[] = []
  private animationId = 0

  ngOnInit() {
    this.generateCodeLines()
  }

  ngAfterViewInit() {
    this.initCanvas()
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }

  private generateCodeLines() {
    const generateCodeLine = () => {
      const prefixes = ["AC", "SYS", "CMD", "REF", "BRF", "MEM", "EXE", "DAT"]
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const number = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,./<>?"
      let randomChars = ""

      const length = Math.floor(Math.random() * 30) + 10
      for (let i = 0; i < length; i++) {
        randomChars += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      return `${prefix}.${number} :: ${randomChars}`
    }

    for (let i = 0; i < 100; i++) {
      this.codeLines.push(generateCodeLine())
    }
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create grid points
    const gridSize = 40
    const cols = Math.ceil(canvas.width / gridSize)
    const rows = Math.ceil(canvas.height / gridSize)

    const points: any[] = []
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        points.push({
          x: i * gridSize,
          y: j * gridSize,
          size: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Create hexagons
    const hexagons: any[] = []
    for (let i = 0; i < 5; i++) {
      hexagons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 20,
        opacity: Math.random() * 0.2 + 0.05,
        rotation: Math.random() * Math.PI,
      })
    }

    // Animation loop
    let frame = 0

    const animate = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid points
      points.forEach((point) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size * (0.8 + Math.sin(frame * 0.05 + point.x + point.y) * 0.2), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${point.opacity * (0.8 + Math.sin(frame * 0.02 + point.x) * 0.2)})`
        ctx.fill()
      })

      // Draw hexagons
      hexagons.forEach((hex) => {
        this.drawHexagon(
          ctx,
          hex.x,
          hex.y,
          hex.size * (0.9 + Math.sin(frame * 0.02) * 0.1),
          hex.opacity,
          hex.rotation + frame * 0.001,
        )
      })

      // Draw data lines
      const lineCount = 3
      for (let i = 0; i < lineCount; i++) {
        const y = (canvas.height / (lineCount + 1)) * (i + 1)
        const progress = (frame * (0.5 + i * 0.2)) % canvas.width

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(progress, y)
        ctx.strokeStyle = `rgba(255, 0, 0, ${0.1 + i * 0.05})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw dot at the end
        ctx.beginPath()
        ctx.arc(progress, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 0, 0, ${0.3 + i * 0.1})`
        ctx.fill()
      }

      this.animationId = requestAnimationFrame(animate)
    }

    animate()
  }

  private drawHexagon(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    opacity: number,
    rotation = 0,
  ) {
    ctx.beginPath()

    for (let i = 0; i < 6; i++) {
      const angle = rotation + (Math.PI * 2 * i) / 6
      const pointX = x + size * Math.cos(angle)
      const pointY = y + size * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(pointX, pointY)
      } else {
        ctx.lineTo(pointX, pointY)
      }
    }

    ctx.closePath()
    ctx.strokeStyle = `rgba(255, 0, 0, ${opacity})`
    ctx.lineWidth = 1
    ctx.stroke()
  }
}

