var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;elusername; elpassword // Declare variables
elForm          = document.getElementById('formSignup');          // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
// elTerms         = document.getElementById('terms');
// elTermsHint     = document.getElementById('termsHint');
elTerms         = document.getElementById('username');
elTermsHint     = document.getElementById('usernameHint');
elTerms         = document.getElementById('password');
elTermsHint     = document.getElementById('passwordHint');
function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  if (pack === 'Username') {                              // If username package
    elPackageHint.innerHTML = 'Thanks you will recive info on new classes.';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'Thank you!';            // Show this message
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);