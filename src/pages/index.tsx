import {useRouter} from 'next/router';
import {useEffect} from "react";
import {Flex} from '@chakra-ui/react';
import ReactLoading from '@assets/animations/98227-robot-loading.json';

import Lottie from 'lottie-react';

const Validador = () => {

    const navigate = useRouter();
    useEffect(() => {
        async function loadUserFromCookies() {
            navigate.push('/login');
        }

        loadUserFromCookies();
    })


    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="100vw"
            position="fixed"
            top="0"
            left="0"
            zIndex="9999"
        >
            <Lottie
                animationData={ReactLoading}
                autoplay
                loop
                height={100}
                width={100}
                style={{
                    margin: 0
                }}
            />
        </Flex>
    )
}

export default Validador
