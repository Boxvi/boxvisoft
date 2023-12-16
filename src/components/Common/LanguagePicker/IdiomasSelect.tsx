import { useRouter } from 'next/router';
import { Button, Image, Menu, MenuButton, MenuItem, MenuList, HStack, Text } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
// import { useQueryClient } from '@tanstack/react-query';

export function IdiomasSelect() {
    const { t } = useTranslation('common');
    // const queryClient = useQueryClient();
    const router = useRouter();

    // @ts-ignore
    const handlerChangeLanguage = async (key) => {
        // router.push({ pathname: router.pathname, query: { ...router.query, locale: key } });
        // router.push(router.pathname, router.pathname, { locale: key });

        await setLanguage(key);
        Cookies.set('NEXT_LOCALE', key);
        // await queryClient.invalidateQueries();
        await location.reload();
    };

    let flagImageSrc;

    switch (router.locale) {
        case 'es':
            flagImageSrc = '/images/flags/ec.png';
            break;
        case 'en':
            flagImageSrc = '/images/flags/us.png';
            break;
        case 'fr':
            flagImageSrc = '/images/flags/fr.png';
            break;
        default:
            flagImageSrc = '/images/flags/default.png';
            break;
    }

    // @ts-ignore
    const LanguageMenuItem = ({ lang, imageSrc, label, onClick }) => {
        return (
            <MenuItem onClick={() => onClick(lang)}>
                <Image alt={label} src={`/images/flags/${imageSrc}.png`}/>
                <Text mx={2} color={router.locale === lang ? 'black' : 'gray.500'} fontWeight="bold">
                    {t(label.toLowerCase())}
                </Text>
            </MenuItem>
        );
    };

    return (
        <Menu>
            <MenuButton as={Button} aria-label="Options" variant="outline" bg={'white'}>
                <HStack>
                    <Text>{t('idioma')}</Text>
                    {flagImageSrc && <Image alt="flag" src={flagImageSrc}/>}

                </HStack>
            </MenuButton>
            <MenuList>
                <LanguageMenuItem lang="en" imageSrc="us" label="Ingles" onClick={handlerChangeLanguage} />
                <LanguageMenuItem lang="es" imageSrc="ec" label="Espanol" onClick={handlerChangeLanguage} />
                <LanguageMenuItem lang="fr" imageSrc="fr" label="Frances" onClick={handlerChangeLanguage} />

            </MenuList>
        </Menu>
    );
}

