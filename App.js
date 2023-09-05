
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
          source={{ uri: 'https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/356809417_1229925811041766_5929799643946832524_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeE2GfdV55JNDsOQSQLcQn1qr5RY9dvH0cyvlFj128fRzFj651ct8vmzT_3_aBMWSWGt0mQvKWdvrvWjwvY8w3zB&_nc_ohc=YNvvWFct3q0AX-Ifo4I&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfDttqN1bOFlSFvS2rj2xzpzP-EILf8W_v4oWnWKp_uNSA&oe=64FBAC46' }}
          style={{ width: 120, height: 120, borderRadius: 70, marginTop:50,marginLeft:20 }}
        />
        
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


