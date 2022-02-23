export interface UserManagerProps {
  ownerName: string;
}

export interface UserManagerState {
  user: number;
  users: UserData[];
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

