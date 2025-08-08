import * as Location from "expo-location";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MediaLibraryFunction() {
  const { uri } = useLocalSearchParams();
  const [locationText, setLocationText] = useState("Locating...");
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocationText("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCoords({ latitude, longitude });

      const address = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (address.length > 0) {
        const { city, street, region, country } = address[0];
        setLocationText(`${street ?? ""}, ${city ?? region ?? ""}, ${country}`);
      } else {
        setLocationText("Unknown location");
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Media Library</Text>
      </View>

      <TouchableOpacity onPress={() => setShowMap(!showMap)} activeOpacity={0.8}>
        <View style={styles.item}>
          <Image source={{ uri: uri as string }} style={styles.thumbnail} />
          <View style={styles.info}>
            <Text style={styles.label}>📍 Location</Text>
            <Text>{locationText}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {showMap && coords && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={coords} title="You are here" />
        </MapView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    paddingTop: 4,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  map: {
    width: Dimensions.get("window").width - 32,
    height: 200,
    marginTop: 16,
    borderRadius: 12,
  },
});
