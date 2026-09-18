* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #0b0f0d;
  color: white;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 7%;
  background: #101610;
  border-bottom: 1px solid #29352d;
}

.logo {
  color: #63d471;
  font-weight: bold;
  font-size: 18px;
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  color: #b5c0b8;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #63d471;
}

.hero {
  min-height: 650px;
  display: flex;
  align-items: center;
  padding: 80px 8%;
  background:
    linear-gradient(rgba(5,10,7,.88), rgba(5,10,7,.94)),
    repeating-linear-gradient(
      0deg,
      transparent 0 49px,
      rgba(255,255,255,.025) 50px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0 49px,
      rgba(255,255,255,.025) 50px
    );
}

.hero > div {
  max-width: 850px;
}

.small {
  color: #63d471;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
}

h1 {
  font-size: 70px;
  line-height: 1.05;
  margin: 15px 0 25px;
}

h1 span {
  color: #63d471;
}

.description {
  max-width: 650px;
  color: #aab5ad;
  font-size: 19px;
}

.ip-box {
  max-width: 650px;
  margin: 30px 0;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: #18221b;
  border: 1px solid #29352d;
  border-radius: 12px;
}

.ip-box small {
  display: block;
  color: #9daaa1;
}

.ip-box strong {
  font-family: monospace;
  font-size: 18px;
}

button {
  border: 0;
  border-radius: 8px;
  padding: 13px 20px;
  background: #63d471;
  color: #071009;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  transform: translateY(-2px);
}

#message {
  color: #63d471;
}

.section {
  max-width: 1150px;
  margin: auto;
  padding: 90px 6%;
}

h2 {
  font-size: 45px;
  margin-top: 0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.card,
.rule,
.step {
  padding: 25px;
  background: #121914;
  border: 1px solid #29352d;
  border-radius: 12px;
}

.card:hover,
.step:hover {
  border-color: #63d471;
}

.icon {
  font-size: 32px;
  margin-bottom: 15px;
}

.card p,
.step p {
  color: #aab5ad;
}

.rules {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.rule {
  padding: 30px;
}

.allowed {
  border-top: 3px solid #63d471;
}

.forbidden {
  border-top: 3px solid #d66b6b;
}

.rule ul {
  color: #aab5ad;
}

.rule li {
  margin: 10px 0;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.step b {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 50%;
  background: #63d471;
  color: #071009;
}

footer {
  padding: 45px 8%;
  background: #101610;
  border-top: 1px solid #29352d;
  color: #aab5ad;
}

footer h3 {
  color: #63d471;
}

@media (max-width: 800px) {

  header {
    flex-direction: column;
    gap: 15px;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  h1 {
    font-size: 45px;
  }

  .cards,
  .steps,
  .rules {
    grid-template-columns: 1fr 1fr;
  }

  .ip-box {
    flex-direction: column;
    align-items: stretch;
  }

  .ip-box button {
    width: 100%;
  }
}

@media (max-width: 500px) {

  .cards,
  .steps,
  .rules {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 38px;
  }
}
