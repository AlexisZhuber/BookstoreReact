// src/data/seedBooks.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from '../models/bookModel.js';

dotenv.config();

const books = [
    {
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      price: 89.99,
      rating: 4.7,
      image: '/uploads/introduction_to_algorithms.jpg',
      description: 'A comprehensive guide to algorithms and data structures.',
    },
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      author: 'Erich Gamma',
      price: 49.99,
      rating: 4.8,
      image: '/uploads/design_patterns.jpg',
      description: 'A book on software design patterns.',
    },
    {
      title: 'You Don\'t Know JS: ES6 & Beyond',
      author: 'Kyle Simpson',
      price: 29.99,
      rating: 4.6,
      image: '/uploads/you_dont_know_js.jpg',
      description: 'An in-depth look at JavaScript ES6 features.',
    },
    {
      title: 'Deep Learning',
      author: 'Ian Goodfellow',
      price: 79.99,
      rating: 4.9,
      image: '/uploads/deep_learning.jpg',
      description: 'A comprehensive guide to deep learning.',
    },
    {
      title: 'Refactoring: Improving the Design of Existing Code',
      author: 'Martin Fowler',
      price: 42.99,
      rating: 4.7,
      image: '/uploads/refactoring.jpg',
      description: 'A book on improving existing code through refactoring.',
    },
    {
      title: 'The Art of Computer Programming',
      author: 'Donald E. Knuth',
      price: 199.99,
      rating: 4.8,
      image: '/uploads/art_of_computer_programming.jpg',
      description: 'A classic series on computer programming.',
    },
    {
      title: 'Introduction to Machine Learning with Python',
      author: 'Andreas C. Müller',
      price: 59.99,
      rating: 4.5,
      image: '/uploads/machine_learning_with_python.jpg',
      description: 'A guide to machine learning with Python.',
    },
    {
      title: 'Programming Pearls',
      author: 'Jon Bentley',
      price: 39.99,
      rating: 4.6,
      image: '/uploads/programming_pearls.jpg',
      description: 'A book on programming practices and problem solving.',
    },
    {
      title: 'Effective Java',
      author: 'Joshua Bloch',
      price: 54.99,
      rating: 4.9,
      image: '/uploads/effective_java.jpg',
      description: 'Best practices for programming in Java.',
    },
    {
      title: 'The Mythical Man-Month: Essays on Software Engineering',
      author: 'Frederick P. Brooks Jr.',
      price: 34.99,
      rating: 4.7,
      image: '/uploads/mythical_man_month.jpg',
      description: 'Essays on software engineering and project management.',
    },
    {
      title: 'Algorithms',
      author: 'Robert Sedgewick',
      price: 79.99,
      rating: 4.8,
      image: '/uploads/algorithms.jpg',
      description: 'A comprehensive guide to algorithms.',
    },
    {
      title: 'Head First Design Patterns',
      author: 'Eric Freeman',
      price: 49.99,
      rating: 4.8,
      image: '/uploads/head_first_design_patterns.jpg',
      description: 'A visual guide to design patterns.',
    },
    {
      title: 'Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People',
      author: 'Aditya Bhargava',
      price: 39.99,
      rating: 4.6,
      image: '/uploads/grokking_algorithms.jpg',
      description: 'An illustrated guide to algorithms.',
    },
    {
      title: 'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
      author: 'Gene Kim',
      price: 27.99,
      rating: 4.7,
      image: '/uploads/phoenix_project.jpg',
      description: 'A novel about IT and DevOps.',
    },
    {
      title: 'Cracking the Coding Interview: 189 Programming Questions and Solutions',
      author: 'Gayle Laakmann McDowell',
      price: 39.99,
      rating: 4.8,
      image: '/uploads/cracking_the_coding_interview.jpg',
      description: 'A guide to preparing for coding interviews.',
    },
    {
      title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
      author: 'Robert C. Martin',
      price: 32.99,
      rating: 4.8,
      image: '/uploads/clean_coder.jpg',
      description: 'A book on professionalism in programming.',
    },
    {
      title: 'Site Reliability Engineering: How Google Runs Production Systems',
      author: 'Niall Richard Murphy',
      price: 54.99,
      rating: 4.7,
      image: '/uploads/site_reliability_engineering.jpg',
      description: 'A guide to site reliability engineering from Google.',
    },
    {
      title: 'The Pragmatic Programmer: From Journeyman to Master',
      author: 'Andrew Hunt and David Thomas',
      price: 42.99,
      rating: 4.9,
      image: '/uploads/pragmatic_programmer_master.jpg',
      description: 'A guide to becoming a master programmer.',
    },
    {
      title: 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation',
      author: 'Jez Humble',
      price: 49.99,
      rating: 4.7,
      image: '/uploads/continuous_delivery.jpg',
      description: 'A guide to continuous delivery and deployment automation.',
    },
    {
      title: 'Building Microservices: Designing Fine-Grained Systems',
      author: 'Sam Newman',
      price: 47.99,
      rating: 4.7,
      image: '/uploads/building_microservices.jpg',
      description: 'A guide to building microservices.',
    },
    {
      title: 'Soft Skills: The software developer\'s life manual',
      author: 'John Sonmez',
      price: 29.99,
      rating: 4.6,
      image: '/uploads/soft_skills.jpg',
      description: 'A manual for software developers on soft skills and life.',
    }
  ];
  

const seedBooks = async () => {
    
  console.log('MongoDB URI:', process.env.MONGODB_URI);
  try {
    // MongoDB connection
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    await Book.insertMany(books);
    console.log('Books seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding books:', error);
    process.exit(1);
  }
};

seedBooks();
