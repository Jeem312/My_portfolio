// MyCV.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
  },
});

// Create Document Component
const MyCV = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Shanjida Jahan Jeem</Text>
        <Text style={styles.subtitle}>Front-End Developer</Text>
        <Text>Hi, I'm a passionate front-end developer who builds delightful web experiences. With a strong foundation in React.js, HTML, and CSS, I create engaging and user-friendly interfaces.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        <Text>React.js, HTML, CSS, MongoDB, React Router, Firebase, Stripe</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        <Text>Even as a fresher, my enthusiasm for web development drives me to continuously learn and stay updated with the latest technologies and best practices. I specialize in crafting responsive and accessible web applications that not only look great but also perform efficiently.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Projects</Text>
        <Text>Art and Craft Page, Blogging Platform, Asset Management Site</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Contact</Text>

        <Text>Email: shanjidajeem312@gmail.com</Text>
      </View>
    </Page>
  </Document>
);

export default MyCV;
