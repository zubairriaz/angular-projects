import { viewClassName } from '@angular/compiler';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input() appPermission: string[];
  private permission = 'agent';
  constructor(private tempRef : TemplateRef<any>, private vc:ViewContainerRef) { }
  
  ngOnInit(){
    if(this.appPermission.indexOf(this.permission) != -1){
       this.vc.createEmbeddedView(this.tempRef)
    }else{
      this.vc.clear();
    }
  }
}
