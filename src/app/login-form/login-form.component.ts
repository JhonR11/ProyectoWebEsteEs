import { Component, Output, EventEmitter } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Router } from "@angular/router"
import { trigger, state, style, animate, transition } from "@angular/animations"
import { AuthService } from "../services/auth.service"

@Component({
  selector: "app-login-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
  animations: [
    trigger("tabAnimation", [
      state("login", style({ transform: "translateX(0)" })),
      state("register", style({ transform: "translateX(0)" })),
      transition("login => register", [
        style({ transform: "translateX(0)" }),
        animate("0.3s ease-out", style({ transform: "translateX(-100%)" })),
        style({ transform: "translateX(100%)" }),
        animate("0.3s ease-out", style({ transform: "translateX(0)" })),
      ]),
      transition("register => login", [
        style({ transform: "translateX(0)" }),
        animate("0.3s ease-out", style({ transform: "translateX(100%)" })),
        style({ transform: "translateX(-100%)" }),
        animate("0.3s ease-out", style({ transform: "translateX(0)" })),
      ]),
    ]),
  ],
})
export class LoginFormComponent {
  @Output() closeForm = new EventEmitter<void>()

  isLogin = true
  loginData = {
    email: "",
    password: "",
  }

  registerData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  toggleForm() {
    this.isLogin = !this.isLogin
  }

  onSubmit() {
    if (this.isLogin) {
      console.log("Login data:", this.loginData)
      // Simular login exitoso
      this.authService.login(this.loginData.email, this.loginData.password)
      this.router.navigate(["/main"])
    } else {
      console.log("Register data:", this.registerData)
      // Simular registro exitoso
      this.authService.register(this.registerData.name, this.registerData.email, this.registerData.password)
      this.router.navigate(["/main"])
    }
  }
}

