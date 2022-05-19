import { User } from "./";

interface UserSettingsProps {
  uid: string;
  name?: string;
}

class UserSettings {
  public user: User;

  constructor({ uid }: UserSettingsProps) {
    this.user = new User({ uid });
  }
}

export default UserSettings;
