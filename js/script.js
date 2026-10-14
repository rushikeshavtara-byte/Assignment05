const $ = (id) => document.getElementById(id);

window.addEventListener('load', () => {
  
    const form = $('empForm');

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        
        const empId = $('id').value;
        const fullName = $('name').value;
        const extension = $('ext').value;
        const email = $('email').value;
        const department = $('department').value;
        
      
        console.log(`ID: ${empId}`);
        console.log(`Name: ${fullName}`);
        console.log(`Extension: ${extension}`);
        console.log(`Email: ${email}`);
        console.log(`Department: ${department}`);
    });
});