import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmedService {

    results: string[];

    private url = 'http://localhost:8080/api';  // URL to web api
    headerToken: object;
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private header(token :string):Headers {
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', token);

        return headers;
    }
    
//Users




//Countries
    _getCountries(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/country/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postCountry(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/country'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putCountry(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/country/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delCountry(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/country/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

//Drugs
    _getDrugs(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/drug/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postDrugs(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/drug'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putDrugs(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/drug/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delDrugs(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/drug/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    

//Patient weight
    _getPatientWeight(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/patient_weight/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postPatientWeight(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/patient_weight'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putPatientWeight(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/patient_weight/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delPatientWeight(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/patient_weight/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

//Infusion pump
    _getInfusionPump(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/infusion_pump/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postInfusionPump(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/infusion_pump'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putInfusionPump(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/infusion_pump/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delInfusionPump(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/infusion_pump/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

//Needle gauge
    _getNeedleGauge(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/needle_gauge/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postNeedleGauge(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/needle_gauge'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putNeedleGauge(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/needle_gauge/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delNeedleGauge(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/needle_gauge/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }    

//Number needle
    _getNumberNeedle(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/number_needle/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postNumberNeedle(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/number_needle'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putNumberNeedle(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/number_needle/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delNumberNeedle(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/number_needle/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }     

//Sepecific needle
    _getSpecificNeedle(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/specific_needle/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postSpecificNeedle(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/specific_needle'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putSpecificNeedle(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/specific_needle/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delSpecificNeedle(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/specific_needle/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }  

//Position
    _getPosition(token: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/position/all'}`;
        return this.http
            .get(url,{headers: headers})
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(response=>{
                response.json()
            });
    }

    _postPosition(token: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/position'}`;
        return this.http
            .post(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _putPosition(token: string, id: string, description: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/position/_id=' + id}`;
        return this.http
            .put(url, JSON.stringify({description: description}),{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    _delPosition(token: string, id: string): Promise<any> {
        let headers = this.header(token);
        const url = `${this.url}${'/position/_id=' + id}`;
        return this.http
            .delete(url,{headers: headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    } 

    
}






