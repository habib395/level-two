import Contact from "~/routes/contact";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main>
     <h2>this is todo app.</h2>
     <p>this is me. from level-two.</p>
     <div className="flex item-center justify-center">
     <Contact></Contact>
     </div>
    </main>
  );
}

