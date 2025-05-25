import { Component, type OnInit, type OnDestroy, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { BackgroundElementsComponent } from "../background-elements/background-elements.component"
import { Router } from "@angular/router"

@Component({
  selector: "app-login-form",
  standalone: true,
  imports: [CommonModule, FormsModule, BackgroundElementsComponent],
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  id = signal("")
  password = signal("")
  loading = signal(false)
  initialized = signal(false)
  showForm = signal(false)
  scanLine = signal(0)

  private scanInterval: any
  private timer1: any
  private timer2: any

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialization sequence
    this.timer1 = setTimeout(() => {
      this.initialized.set(true)
    }, 1000)

    this.timer2 = setTimeout(() => {
      this.showForm.set(true)
    }, 2000)

    // Scan line animation
    this.scanInterval = setInterval(() => {
      this.scanLine.update((value) => (value + 1) % 100)
    }, 50)
  }

  ngOnDestroy() {
    clearTimeout(this.timer1)
    clearTimeout(this.timer2)
    clearInterval(this.scanInterval)
  }

  async handleSubmit() {
    this.loading.set(true)
    const id = this.id()
    const password = this.password()

    // Simulate a login request
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to the main page
    if (id === "admin" && password === "admin") {
      this.router.navigate(["/main"])
    } else {
      alert("Invalid credentials")
      this.loading.set(false)
    }
  }


  updateId(event: Event) {
    this.id.set((event.target as HTMLInputElement).value)
  }

  updatePassword(event: Event) {
    this.password.set((event.target as HTMLInputElement).value)
  }
}

