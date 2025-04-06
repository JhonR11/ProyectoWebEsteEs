import { Component, type OnInit, type OnDestroy, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { BackgroundElementsComponent } from "../background-elements/background-elements.component"

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

  handleSubmit() {
    this.loading.set(true)

    // Simulate login process
    setTimeout(() => {
      this.loading.set(false)
      console.log({ id: this.id(), password: this.password() })
    }, 2000)
  }

  updateId(event: Event) {
    this.id.set((event.target as HTMLInputElement).value)
  }

  updatePassword(event: Event) {
    this.password.set((event.target as HTMLInputElement).value)
  }
}

