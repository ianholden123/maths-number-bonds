[![Netlify Status](https://api.netlify.com/api/v1/badges/21e301d7-dbc1-4866-a80e-7f4b05f84c20/deploy-status)](https://app.netlify.com/sites/admiring-lumiere-b6c474/deploys)


<p align="center">
  <img src="public/icon-192x192.png" alt="Logo">

  <h1 align="center">Maths Number Bonds</h1>

  <p align="center">
    Help your students practice and assess their number bonds. See how quickly they are solving problems and print their results to PDF.
    <br />
    <a href="https://mathsnumberbonds.com/">View Demo</a>
    ·
    <a href="https://github.com/ianholden123/maths-number-bonds/issues">Report Bug</a>
    ·
    <a href="https://github.com/ianholden123/maths-number-bonds/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#building">Building</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#customising-this-project">Customising this project</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [React](https://reactjs.org/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to install the following software to run this project:

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ianholden123/maths-number-bonds.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Development
* To run the app in development mode, run the following script:
  ```sh
  npm start
  ```

* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building

* To build the project in preparation for it to be hosted on a production environment, you must run the following script:
  
  ```sh
  npm run build
  ```

* This will build the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### Testing

* Run the following script to launch the test runner in the interactive watch mode:

  ```sh
  npm test
  ```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ianholden123/maths-number-bonds/issues) for a list of proposed features (and known issues).

## Customising this project

Some additional configurations can be made before building the project by accessing the configuration files in the `/src/config` directory.

If you intend on making changes to the colour of each phase in the `/src/config/phases.js` file, be aware that HEX colour values will work best. For example, instead of using a colour value such as `blue`, use `#0000ff`. Note that we have specified the hash (#) before the RGB value too. This is important for manipulating the font colour on the results grid.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please see the following documents for more details on how you can [contribue](CONTRIBUTING.md) and our [code of conduct](CODE_OF_CONDUCT.md).



<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.



<!-- CONTACT -->
## Contact

Ian Holden - [Website](https://ianholden.co.uk) - ianholdendev@outlook.com