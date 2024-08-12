import logo from "./logo.svg";
import "./App.css";

function App() {
  f.call(null);

function f() {
  alert(this);
}
console.log(new Array.prototype.constructor(1, 2));
console.log(new Array(1, 2));
console.log(Array(1, 2))
console.log([1, 2])

let name = "Вася";
function sayHi() {
  alert(name);
}

setTimeout(function() {
  let name = "Петя";
  sayHi();
}, 1000);

let a = new Array(1,2), b = new Array(3);
alert(a[0] + b[0]);
console.log("a", [] + 1 + 2);
console.log("b", b);

let user = {
  sayHi: function() {
    alert(this);
  }
};

(user.sayBye = user.sayHi)();

  const hotel = {
    username: "Resort hotel",
    showThis() {
      const foo = () => {
        // Стрілки запам'ятовують контекст під час оголошення
        // з батьківської області видимості
        console.log("this in foo: ", this);
      };

      foo();
      console.log("this in showThis: ", this);
    },
  };

  hotel.showThis();
  // this in foo: {username: 'Resort hotel', showThis: ƒ}
  // this in showThis: {username: 'Resort hotel',showThis: ƒ}

  function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
  }

  const mango = {
    username: "Манго",
  };
  const poly = {
    username: "Полі",
  };

  greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
  greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

  greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
  greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

  function greet(clientName) {
    return `${clientName}, ласкаво просимо в «${this.service}».`;
  }

  const steam = {
    service: "Steam",
  };
  const steamGreeter = greet.bind(steam);
  steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

  const gmail = {
    service: "Gmail",
  };
  const gmailGreeter = greet.bind(gmail);
  gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

  const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  function makeMessage(callback) {
    // callback() - це виклик методу getFullName без об'єкта
    console.log(`Обробляємо заявку від ${callback()}.`);
  }

  // makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції
  makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.

  class User {
    #email;

    constructor(email) {
      this.#email = email;
    }

    get email() {
      return this.#email;
    }

    set email(newEmail) {
      this.#email = newEmail;
    }
  }

  class ContentEditor extends User {
    // Тіло класу ContentEditor
  }

  const editor = new ContentEditor("mango@mail.com");
  console.log(editor); // { email: "mango@mail.com" }
  console.log(editor.email); // "mango@mail.com"

  const arr = [1, 2, 3, 4, 5, 7, 6];
  const result = Array.isArray(arr);
  console.log(result);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
