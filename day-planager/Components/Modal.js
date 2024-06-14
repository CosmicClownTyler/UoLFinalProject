import { useRef, useEffect, useState } from 'react';
import { Platform, Keyboard, StyleSheet, Animated, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export function Modal(props) {
    // Deconstruct props
    const { shown, style, onClose, children, height = 50 } = props;

    const [modalShouldRender, setModalShouldRender] = useState(false);
    const modalScale = useRef(new Animated.Value(0)).current;
    const modalOpacity = useRef(new Animated.Value(0)).current;

    const animateOpen = () => {
        setModalShouldRender(true);
        Animated.parallel([
            Animated.timing(modalScale, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(modalOpacity, {
                toValue: 0.7,
                duration: 250,
                useNativeDriver: true,
            })
        ]).start();
    };
    const animateClose = () => {
        Animated.parallel([
            Animated.timing(modalScale, {
                toValue: height,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(modalOpacity, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            })
        ]).start(() => {
            setModalShouldRender(false);
        });
    };

    // Called everytime the checked value changes
    useEffect(() => {
        if (shown) {
            animateOpen();
        }
        else {
            animateClose();
            Keyboard.dismiss();
        }
    }, [shown]);

    return (
        <View style={modalStyles.container} pointerEvents='box-none'>
            {modalShouldRender &&
                <Animated.View style={[modalStyles.container, {
                    backgroundColor: '#000000',
                    opacity: modalOpacity
                }]}>
                    <TouchableOpacity onPress={onClose} style={modalStyles.pressable} pointerEvents={shown ? 'auto' : 'none'} />
                </Animated.View>
            }
            {modalShouldRender &&
                <KeyboardAvoidingView style={modalStyles.container} pointerEvents='box-none'
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <Animated.View
                        style={[modalStyles.innerModal, style, {
                            height: height,
                            transform: [{
                                translateY: modalScale,
                            }],
                        }]}
                    >
                        {children}
                    </Animated.View>
                </KeyboardAvoidingView>
            }
        </View>
    );
}

const modalStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    pressable: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    innerModal: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
});