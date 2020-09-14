import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
selector: 'app-form',
templateUrl: './form.component.html',
styleUrls: ['./form.component.css']
})
export class FormtComponent implements OnInit{

    constructor (private fb: FormBuilder){}

    registration = this.fb.group({
        name: ['',[Validators.required,Validators.minLength(3)]],
        password: ['',Validators.required],
        phone: ['',Validators.required]
    });

    // registration = new FormGroup({
    //     name: new FormControl(''),
    //     password: new FormControl(''),
    //     mobile: new FormControl('')
    // });

    work(){
        this.registration.setValue({
            name: 'grov',
            password: 'test',
            mobile: '9685745896'
        })
    }

    ngOnInit(){
        
    }
}