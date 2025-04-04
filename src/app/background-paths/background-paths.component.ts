import { Component, Input, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import type { Router } from "@angular/router"
import { trigger, state, style, animate, transition } from "@angular/animations"
import { FormsModule } from "@angular/forms"
import { LoginFormComponent } from "../login-form/login-form.component"

@Component({
  selector: "app-background-paths",
  standalone: true,
  imports: [CommonModule, FormsModule, LoginFormComponent],
  templateUrl: "./background-paths.component.html",
  styleUrls: ["./background-paths.component.css"],
  animations: [
    trigger("fadeIn", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate("2s ease-out", style({ opacity: 1 }))]),
    ]),
    trigger("letterAnimation", [
      state("void", style({ transform: "translateY(100px)", opacity: 0 })),
      transition(":enter", [animate("0.5s ease-out", style({ transform: "translateY(0)", opacity: 1 }))]),
    ]),
    trigger("formAnimation", [
      state("hidden", style({ opacity: 0, transform: "translateY(20px)" })),
      state("visible", style({ opacity: 1, transform: "translateY(0)" })),
      transition("hidden => visible", [animate("0.3s ease-out")]),
      transition("visible => hidden", [animate("0.2s ease-in")]),
    ]),
  ],
})
export class BackgroundPathsComponent implements OnInit {
  @Input() title = "Background Paths"

  words: string[] = []
  paths: any[] = []
  paths2: any[] = []
  showForm = false

  constructor(private router: Router) {}

  ngOnInit() {
    this.words = this.title.split(" ")

    // Generate paths for the background
    this.generatePaths(1)
    this.generatePaths(-1)
  }

  generatePaths(position: number) {
    const pathsArray = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      color: `rgba(15,23,42,${0.1 + i * 0.03})`,
      width: 0.5 + i * 0.03,
      animationDuration: `${20 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    }))

    if (position === 1) {
      this.paths = pathsArray
    } else {
      this.paths2 = pathsArray
    }
  }

  getLetterDelay(wordIndex: number, letterIndex: number): string {
    return `${wordIndex * 100 + letterIndex * 30}ms`
  }

  toggleForm() {
    this.showForm = !this.showForm
  }

  navigateToMain() {
    this.router.navigate(["/main"])
  }
}

