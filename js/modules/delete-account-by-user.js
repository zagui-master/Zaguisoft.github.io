import{url}from"../helpers/urls.js";import{deleteAccountForm}from"../helpers/locatores.js";const{form:form,account:account,phoneNumber:phoneNumber,password:password,alertEmail:alertEmail,alertPhoneNumber:alertPhoneNumber,alertPassword:alertPassword}=deleteAccountForm,getUserAccounts=()=>JSON.parse(sessionStorage.getItem("account"))||[],getCurrentAccount=()=>JSON.parse(sessionStorage.getItem("current_user")),deleteAccount=(e,t,r,s,a,o)=>{const l=JSON.parse(sessionStorage.getItem("account"))||[],n=JSON.parse(sessionStorage.getItem("current_user")),c=l.findIndex((e=>e.email===n)),u=l[c].password,m=l[c].phoneNumber;e.value===n&&t.value===m&&r.value===u&&(localStorage.removeItem(n),localStorage.removeItem(`purchased_${n}`),localStorage.removeItem(`updated_stock_${n}`),sessionStorage.removeItem("current_user"),l.splice(c,1),sessionStorage.setItem("account",JSON.stringify(l)),form.reset(),window.open(url.log_in,"_blank"),window.close()),e.value!==n&&""!==e.value&&(s.classList.add("alert-text"),s.innerText="Incorrect email",e.classList.add("alert-input")),t.value!==m&&""!==t.value&&(a.classList.add("alert-text"),a.innerText="Incorrect phone number",t.classList.add("alert-input")),r.value!==u&&""!==r.value&&(o.classList.add("alert-text"),o.innerText="Incorrect password",r.classList.add("alert-input"))};form.addEventListener("submit",(e=>{e.preventDefault(),deleteAccount(account,phoneNumber,password,alertEmail,alertPhoneNumber,alertPassword)}));