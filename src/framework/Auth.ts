interface Iuser {
  email: string;
  photoUrl: string;
  displayName: string;
  userId: string;
}

export default class Auth {
  user: Iuser | null = null;

  private setUser(user: Iuser) {
    this.user = user;
  }

  /**
   * @returns Iuser
   */
  public getCurrentUser(): Iuser | null {
    return this.user;
  }

  /**
   * @returns Promise
   */
  public promtLogin(): Promise<Iuser> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          email: "saurabh@geekyants.com",
          photoUrl: "",
          displayName: "Saurabh",
          userId: "2"
        };
        this.setUser(user);
        resolve(user);
      }, 2000);
    });
  }
}
