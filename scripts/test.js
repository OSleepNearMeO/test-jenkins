import * as fs from 'fs';
// const Handlebars = require('handlebars');
import Handlebars from "handlebars";
// Template for page.ts and style.css




const template = `
{{! page.ts }}
import React from 'react';

const {{componentName}}: React.FC = () => {
  return (
    <div className="{{componentName}}">
      {/* Your component JSX here */}
    </div>
  );
};

export default {{componentName}};

{{! style.css }}
.{{componentName}} {
  /* Your component styles here */
}
`;

// Function to create folder and files
function generateComponent(componentName) {
  // Create folder
  fs.mkdirSync(componentName);

  // Create page.ts and style.css files
  const files = [componentName+'.page.ts', componentName+'.style.css'];
  files.forEach((file) => {
    const content = Handlebars.compile(template)({ componentName });
    fs.writeFileSync(`${componentName}/${file}`, content);
  });

  console.log(`Component ${componentName} created successfully!`);
}

// Example usage
const componentName = 'MyComponent';
generateComponent(componentName);