const data = [
  {
    id: '9021793848917992',
    title: 'Introduction to CSS Grid Layout',
    body: 'CSS Grid Layout is a powerful tool for creating complex layouts in web design. It allows developers to easily define rows and columns, and to position elements within them.',
    author: 'Sarah Lee',
    tags: ['CSS', 'Grid Layout'],
    date: '2022-01-09',
  },
  {
    id: '3083126839342818',
    title: 'Responsive Web Design with Bootstrap',
    body: 'Bootstrap is a popular front-end framework for creating responsive websites. It provides a variety of pre-built components and styles that make it easy to create a professional-looking site.',
    author: 'John Smith',
    tags: ['Bootstrap', 'Responsive Design'],
    date: '2022-02-15',
  },
  {
    id: '5703187329379835',
    title: 'JavaScript Fundamentals',
    body: 'JavaScript is a programming language used to create interactive web pages and dynamic user interfaces. It is an essential skill for any web developer.',
    author: 'Karen Chen',
    tags: ['JavaScript', 'Programming'],
    date: '2022-03-01',
  },
  {
    id: '2394056208394732',
    title: 'Using React for Front-End Development',
    body: 'React is a popular JavaScript library for building user interfaces. It provides a simple and efficient way to create reusable components that can be combined to create complex applications.',
    author: 'Bob Johnson',
    tags: ['React', 'Front-End Development'],
    date: '2022-04-17',
  },
  {
    id: '9124873389470927',
    title: 'Creating Animations with CSS',
    body: 'CSS can be used to create animations and other dynamic effects on web pages. It provides a variety of properties and values that can be used to control the timing, duration, and style of animations.',
    author: 'Karen Chen',
    tags: ['CSS', 'Animations'],
    date: '2022-05-03',
  },
  {
    id: '5147843920183921',
    title: 'Advanced JavaScript Techniques',
    body: 'JavaScript has many advanced features and techniques that can be used to create complex applications. These include closures, higher-order functions, and asynchronous programming.',
    author: 'Mark Davis',
    tags: ['JavaScript', 'Advanced Techniques'],
    date: '2022-06-20',
  },
  {
    id: '8374820193847912',
    title: 'Building Websites with WordPress',
    body: 'WordPress is a popular content management system that can be used to create websites and blogs. It provides a variety of themes and plugins that can be used to customize the look and functionality of a site.',
    author: 'Karen Chen',
    tags: ['WordPress', 'Web Development'],
    date: '2022-07-12',
  },
  {
    id: '1298374910247862',
    title: 'Creating Responsive Images',
    body: "Images are an important part of web design, but they can also slow down a site's loading time. To optimize images for the web, developers can use techniques such as compression, lazy loading, and responsive images.",
    author: 'Jane Doe',
    tags: ['Images', 'Responsive Design'],
    date: '2022-08-28',
  },
  {
    id: '8491024783209147',
    title: 'Improving Web Accessibility',
    body: 'Web accessibility is an important consideration for developers, as it ensures that websites are usable by people with disabilities. Some common techniques for improving accessibility include using alt tags for images, providing captions for videos, and ensuring that websites are keyboard accessible.',
    author: 'Karen Chen',
    tags: ['Accessibility', 'Web Development'],
    date: '2022-09-10',
  },
];

function getAllDiffTags(arr) {
  const finalDiffTags = [];
  arr.forEach(({ tags }) => {
    tags.forEach((tagVal) => {
      // console.log('tagVal ===', tagVal);
      // pries idedant patikrinti ar tokio nera
      if (!finalDiffTags.includes(tagVal)) {
        finalDiffTags.push(tagVal);
      }
    });
  });
  // console.log('finalDiffTags ===', finalDiffTags);
  return finalDiffTags;
}

getAllDiffTags(data);
