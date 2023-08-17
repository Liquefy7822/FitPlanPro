.header {
  position: relative;
  background-color: #f5f5f5;
  padding: 20px 0;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 10px 0;
  margin: 0;
}

.nav-item {
  padding: 10px 15px;
  background-color: #333;
  border: none;
  border-radius: 5px;
}

.nav-item a {
  color: white;
  text-decoration: none;
}

.app-title {
  text-align: center;
  margin-top: 50px;
}
