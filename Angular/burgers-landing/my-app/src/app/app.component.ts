import { AppService } from './app.service';
import { Component, HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency = '$';
  loaderShowed = true;
  loader = true;

  orderImageStyle:any;
  mainImageStyle:any;

  form = this.fb.group({
    order:['', Validators.required],
    name:['', Validators.required],
    phone:['', Validators.required],
    
  });

  productsData:any;

  constructor(private fb: FormBuilder, private appService: AppService){

  };

  @HostListener ('document:mousemove', [`$event`])
  onMouseMove (e:MouseEvent){
    this.orderImageStyle = {transform:'translate(-' + ((e.clientX * 0.3) / 8) + 'px,-' + ((e.clientY *0.3)/8) + 'px)'};
    this.mainImageStyle = {transform:'translate(-' + ((e.clientX * 0.3) / 8) + 'px,-' + ((e.clientY *0.3)/8) + 'px)'};
  }


  ngOnInit() {
// возникновение бургера
    setTimeout(()=>{
      this.loaderShowed = false;
    }, 3000);

    setTimeout(()=>{
      this.loader = false;
    }, 4000); 

    this.appService.getData().subscribe(data => this.productsData = data);
  }


  title ='burgers';
  scrollTo(target:HTMLElement, burger?:any ) {
//homework запрет пользователю изменять поле продукта, будет вставлять в название и цену продукта в поле
    target.scrollIntoView({behavior:'smooth'});
     if(burger) {
      this.form.patchValue({order:burger.title + '( ' + burger.price + ' ' + this.currency + ')'});
     }
  }
  //валидация
  confirmOrder(){
    if(this.form.valid) {
      //запрос на бэкенд
      this.appService.sendOrder(this.form.value)
      .subscribe({
        next:(response:any) => {
          alert(response.message);
          this.form.reset()
        },
        error:(response) => {
          alert(response.error.message);
        }
      }
      );
      

    }
  }

  changeCurrency() {
      let newCurrency = '$',
        coefficient = 1;

    if(this.currency==='$'){
        newCurrency='₽';
        coefficient=80;
    } else if (this.currency==='₽') {
        newCurrency ='BYN';
        coefficient=3;
    } else if (this.currency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (this.currency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

   this.currency = newCurrency;
    this.productsData.forEach((item:any)=>{
      item.price = +(item.basePrice*coefficient).toFixed(1);
    })


}

}
