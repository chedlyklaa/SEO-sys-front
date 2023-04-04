import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit  {
 
  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<ChangePasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    }
    ngOnInit(): void {
      if (this.data.usercode != '' && this.data.usercode != null) {
        this.loaduserdata(this.data.usercode);
      }
    }
    rolelist: any;
    editdata: any;
  
    registerform = this.builder.group({
      id: this.builder.control(''),
      name: this.builder.control(''),
      password: this.builder.control(''),
      email: this.builder.control(''),
      role: this.builder.control('', Validators.required),
      isactive: this.builder.control(false)
    });
  
    loaduserdata(code: any) {
      this.service.GetUserbyCode(code).subscribe(res => {
        this.editdata = res;
        console.log(this.editdata);
        this.registerform.setValue({
          id: this.editdata.id, name: this.editdata.name,
          password: this.editdata.password, email: this.editdata.email, 
          role: this.editdata.role, isactive: this.editdata.isactive
        });
      });
    }
      UpdatePassword(){
    this.service.updateuser(this.registerform.value.id, this.registerform.value).subscribe(res => {
      this.toastr.success('Updated successfully.');
      this.dialogref.close();
    });
  }
}
