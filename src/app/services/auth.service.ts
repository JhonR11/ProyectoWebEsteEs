import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable()

  private currentUserSubject = new BehaviorSubject<any>(null)
  currentUser$ = this.currentUserSubject.asObservable()

  constructor() {
    // Verificar si hay un token en localStorage al iniciar
    const token = localStorage.getItem("auth_token")
    if (token) {
      this.isAuthenticatedSubject.next(true)
      // Aquí podrías decodificar el token para obtener la info del usuario
      // o hacer una petición al backend para obtener los datos del usuario
    }
  }

  login(email: string, password: string): boolean {
    // Aquí implementarías la lógica real de autenticación con tu backend
    // Por ahora, simulamos un login exitoso
    const mockUser = {
      id: 1,
      name: "Usuario",
      email: email,
    }

    // Guardar token en localStorage
    localStorage.setItem("auth_token", "mock_token_123")

    // Actualizar estado de autenticación
    this.isAuthenticatedSubject.next(true)
    this.currentUserSubject.next(mockUser)

    return true
  }

  register(name: string, email: string, password: string): boolean {
    // Aquí implementarías la lógica real de registro con tu backend
    // Por ahora, simulamos un registro exitoso
    const mockUser = {
      id: 1,
      name: name,
      email: email,
    }

    // Guardar token en localStorage
    localStorage.setItem("auth_token", "mock_token_123")

    // Actualizar estado de autenticación
    this.isAuthenticatedSubject.next(true)
    this.currentUserSubject.next(mockUser)

    return true
  }

  logout(): void {
    // Eliminar token del localStorage
    localStorage.removeItem("auth_token")

    // Actualizar estado de autenticación
    this.isAuthenticatedSubject.next(false)
    this.currentUserSubject.next(null)
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value
  }
}

