export interface User
{
  id:number;
  first_name:string;
  last_name:string;
  email:string;
  avatar:string;
}
export interface UserInformation {
  page: Number;
  per_page: Number;
  total: Number;
  total_pages: Number;
  data: User[];
}

