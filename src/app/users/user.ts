export class User {
  key: string;
  first_name: string;
  last_name: string;
  email: String;
  photo_url: String;
  phoneNumber: String;
  emailVerified: String;
  displayName: String;

  constructor(obj) {
    this.key = [obj.key].join();
    this.first_name = [obj.first_name].join();
    this.last_name = [obj.last_name].join();
    this.email = [obj.email].join();
    if (obj.photoURL) {
      this.photo_url = obj.photo_url;
    } else {
      this.photo_url = 'https://zabavnik.club/wp-content/uploads/2018/02/kartinki_krutye_na_avatarku_16_01062324.jpg';
    }


    this.phoneNumber = [obj.phoneNumber].join();
    this.emailVerified = [obj.emailVerified].join();
    this.displayName = [obj.displayName].join();
  }
}
