import { View, Text, Pressable } from 'react-native';

const MealItem = ({ title }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
