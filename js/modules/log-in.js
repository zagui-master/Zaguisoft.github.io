import{logInForm}from"../helpers/locatores.js";import{admin}from"../data/admins.js";import{url}from"../helpers/urls.js";const{form:form,email:email,password:password,alertPassword:alertPassword}=logInForm,getUserAccount=()=>JSON.parse(sessionStorage.getItem("account"))??[],handleIncorrectPassword=(s,e)=>{s.classList.add("alert-text"),s.textContent="Incorrect password",e.classList.add("alert-input")},login=(s,e,r,o)=>{const t=(JSON.parse(sessionStorage.getItem("account"))??[]).find((e=>e.email===s)),a=o.find((e=>e.account===s));t&&t.password===e?(sessionStorage.setItem("current_user",JSON.stringify(s)),form.reset(),window.open(url.courses,"_blank"),window.close()):a&&a.password===e?(sessionStorage.setItem("current_user",JSON.stringify(s)),window.open(url.admin,"_blank"),window.close()):handleIncorrectPassword(r,e)};form.addEventListener("submit",(s=>{s.preventDefault(),login(email.value,password.value,alertPassword,admin)}));