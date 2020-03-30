const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    age: null,
    email: null,
    movie: null
  },
  methods: {
    checkForm: function(e)   {  
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }

      if (!this.age) {
        this.errors.push('Age required.');
      }

      if (!this.email) {
        this.errors.push('Email Required');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required');
      }

      if (!this.errors.length) return true;
      e.preventDefault();
    },

    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});
