import { HttpClient } from '@angular/common/http';

export class LoginComponent {
  // ...
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http
      .post('http://localhost:8080/api/v1/auth/authenticate', {
        username: this.username,
        password: this.password,
      })
      .subscribe(
        (response: any) => {
          localStorage.setItem('access_token', response.access_token);
          // 跳转到其他页面
        },
        (error) => {
          // 处理错误
        }
      );
  }
}
