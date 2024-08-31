

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { pagedResultDto } from '../../models/pagedResultDto';
export abstract class CRUDServicesService<createUpdateModelT,filterModel ,modelT, modelT2> {

  constructor(
    private httpClient: HttpClient,
    protected apiUrl: string
  ) { }


  create(data: createUpdateModelT, isMultipart: boolean = false,url?:string): Observable<any> {
    let _data = isMultipart ? this.uploadMultipart(data) : data;
    if (url) {
      url = url;
    }
    else if (!url) {
      url = '';
    }
    if (isMultipart) {

      return this.httpClient.post<modelT>(this.apiUrl + url , _data, {
        reportProgress: true,
        observe: 'events',

      });
    }
    else {
      return this.httpClient.post<modelT>(this.apiUrl + url, _data)

        .pipe(
          map((response) => {

            return response;


          }))
    }
  }

  getById(id: number | string, url?: string): Observable<any> {
    if (url) {
      url = url;
    }
    else if (!url) {
      url = '';
    }

    return this.httpClient.get<any>(this.apiUrl + url + '/' + id).pipe(map(res=>
      {
        return res?.data
      }));;
  }

  get(url?: string): Observable<modelT2> {


    return this.httpClient.get<modelT2>(url?url:this.apiUrl, { withCredentials: true });
  }


  update(id: number | string, data: createUpdateModelT, isMultipart: boolean = false,url?: string): Observable<any> {
    if (url) {
      url = url;
    }
    else if (!url) {
      url = '';
    }
    if (isMultipart) {
      let _data = isMultipart ? this.uploadMultipart(data) : data;

      return this.httpClient.put<modelT>(this.apiUrl +url+ '/' + id, _data, {
        reportProgress: true,
        observe: 'events',
      });
    } else {
      return this.httpClient.put<modelT>(this.apiUrl +url+ '/' + id, data)

        .pipe(
          map((response) => {

            return response;


          }))
    }
  }
  updateInfo(data: createUpdateModelT, isMultipart: boolean = false,url?:string): Observable<any> {
    if (url) {
      url = url;
    }
    else if (!url) {
      url = '';
    }
    if (isMultipart) {
      let _data = isMultipart ? this.uploadMultipart(data) : data;
      return this.httpClient.put<modelT>(this.apiUrl+url, _data, {
        reportProgress: true,
        observe: 'events',
      });
    } else {
      return this.httpClient.put<any>(this.apiUrl+url  , data)

        .pipe(
          map((response) => {

            return response;


          }))
    }
  }
  delete(id: number) {
    return this.httpClient.delete<modelT>(this.apiUrl + '/' + id);
  }
  getAll(url?:string,filter?:filterModel): Observable<modelT> {
   let queryParams=new HttpParams();
   let _filter = filter as object;

if(_filter)
{
  Object.entries(_filter).forEach(([key, value]: any) => {
      queryParams = queryParams.append(key, value);
  })}

    return this.httpClient.get<any>(this.apiUrl+url, { params: queryParams} ).pipe(map(res=>
      {
        return res
      }));
  }

  private uploadMultipart(object: any): FormData {


    var data = new FormData();
    Object.entries(object).forEach(([key, value]: any, i) => {
      if (Array.isArray(value)) {
      }

      if (!Array.isArray(value)) {
        data.append(key, value);


      }


      else {


        Object.entries(value).forEach(([tKey, tValue], j) => {
          if (tValue instanceof File) {

            data.append(key, tValue); 
          }
          else {
            Object.entries(tValue).forEach(([t1Key, t1Value]: any) => {
              if (!Array.isArray(t1Value)) {
                data.append(key + '[' + j + '].' + t1Key, t1Value);
              }
            })
          }
        })
      }
    });

    return data;
  }


}

