# Description
Splish splash, I was taking a bath!

Do you love Magikarp?

Have you wanted Magikarp in your JS code for a long time?

No problem! With this module you can have a part of Magikarp in your code doing absolutly NOTHING!

# Setup
```bash
npm install magikarp-js
```

# Usage
```javascript
const { generation, splash } = require('magikarp-js');
splash(generation.genOne);
```

It even supports all the different generations! FOR FREE
```javascript
const { generation, splash } = require('magikarp-js');
splash(generation.genTwo);
splash(generation.genThreeAndUp);
```

For the modern developer, it obviously works in every FOTM framework
```javascript
import { generation, splash } from 'magikarp-js';
import logo from './logo.svg';
import './App.css';

function App() {
  splash(generation.genThreeAndUp);
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

# Security
On a more serious note, please do not just import random javascript packages, you never know what the maintainer does with them down the road.

# License
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)