import axios, { AxiosPromise, AxiosResponse } from 'axios';

export default class TaskService <T>{
    url:string;
  constructor()
  {
    this.url="https://603ca9ecf4333a0017b680f8.mockapi.io/api/v1/tasks";
  }

   get (): Promise<AxiosResponse<T[]>>{
    return axios
    .get<T[]>(this.url);
 }
 post(model:T):any{
    axios({
        method: 'post',
        url: this.url,
        data: {
         model
        }
      });
      return true;//this is a fake response
 }
}