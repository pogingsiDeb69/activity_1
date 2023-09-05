
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './src/style/Styles.js'

const Course = props => {
  return (
    <View style={styles.second_container}>
      <View style={styles.subsss}>
        <Text style={styles.second_text}>{props.sub}</Text>
      </View>
      <View style={styles.desss}>
        <Text>{props.desc}</Text>
        <Text>Units: 3</Text>
      </View>
    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.first_container}>

        <Image
          source={{ uri: './src/image/myfes.jpg' }}
          style={{ width: 60, height: 60, borderRadius: 20 }}
        />
        naay image are di pa ko kahibaw unsaon para makita
        <Text style={styles.first_text}>
          Deborah Jane Antopina
        </Text>
        <Text style={styles.firs2_text}>
          Information Technology 3
        </Text>

      </View>
      <View style={styles.third_container}>
        <Text style={styles.my_Subject}>My Subjects</Text>
      </View>
      <View>
        <Course sub="ELEC 2" desc="Web Development/Web Enterprise" />
        <Course sub="ELEC 3" desc="Mobile Application" />
        <Course sub="IT 311" desc="Software Engineering" />
        <Course sub="IT 312" desc="Information Assurance and Security 2" />
        <Course sub="IT 313" desc="Quantitative Methods" />

      </View>
      <View style={styles.fourth_Container}>
        <Text style={styles.fourth_text}>Click here to see more</Text>
      </View>

    </View>
  );
}


