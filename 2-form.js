import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a="feedback-form-state",o=document.querySelector(".feedback-form");let e={email:"",message:""};const m=JSON.parse(localStorage.getItem(a));m&&(e=m,document.querySelector('[name="email"]').value=e.email,document.querySelector('[name="message"]').value=e.message);o.addEventListener("input",n);o.addEventListener("submit",s);function n(t){const{name:l,value:r}=t.target;e[l]=r.trim(),localStorage.setItem(a,JSON.stringify(e))}function s(t){if(t.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log("Form submitted with data:",e),localStorage.removeItem(a),e={email:"",message:""},o.reset()}
//# sourceMappingURL=2-form.js.map
