import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit{
queryFormGroup !: FormGroup;
messages = [
  {
    role:"system", content :"You are a helpful assistant"
  }
];
result : any;

constructor(private fb:FormBuilder , private httpClient : HttpClient) {
}
ngOnInit() {
  this.queryFormGroup=this.fb.group({
    query : this.fb.control("")
  })
}

  handleAskGPT() {
  let httpHeaders = new HttpHeaders()
    .set("Authorization","Bearer ");
  let url = "https://api.openai.com/v1/chat/completions";
  let payload =  {
    model :"gpt-3.5-turbo",
    messages : this.messages
  }
    this.httpClient.post(url,payload,{headers:httpHeaders})
      .subscribe({
        next : (resp)=>{
          this.result = resp;
        },
        error:(err)=>{

        }
      })
  }
}
