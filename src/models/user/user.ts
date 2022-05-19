interface UserProps {
  uid: string;
}

class User {
  private uid: string;
  private name: string;
  private sala: string;

  constructor({ uid }: UserProps) {
    this.uid = uid;
    this.name = "not-name";
    this.sala = "not-sala";
  }
}

export default User;
