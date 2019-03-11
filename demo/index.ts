import { SalteAuth, Generic } from '@salte-auth/salte-auth';
import { IFrame } from '../src/iframe';

const auth = new SalteAuth({
  providers: [
    new Generic.OAuth2({
      login: function(): string {
        return 'https://github.com/login/oauth/authorize';
      },

      clientID: 'b44780ca7678681180c9',
      responseType: 'code'
    })
  ],

  handlers: [
    new IFrame({
      default: true
    })
  ]
});

const button = document.createElement('button');
button.innerHTML = `Login`;
button.addEventListener('click', () => {
  auth.login({
    provider: 'generic.oauth2'
  });
});

document.body.appendChild(button);

auth.on('login', (error, token) => {
  if (error) console.error(error);
  else console.log(token);
});
