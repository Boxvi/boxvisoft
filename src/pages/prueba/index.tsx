import {ReactElement} from "react";
import MainLayout from "@components/Layouts/MainLayout";
import useTranslation from 'next-translate/useTranslation';
import {IdiomasSelect} from "@components/Common/LanguagePicker/IdiomasSelect";

const Prueba = () => {

    const {t} = useTranslation('common');

    return (
        <>
            <input placeholder={t('hola')} />

            <h1>{t('codigo')}</h1>
            <h1>{t('hola')}</h1>

            <IdiomasSelect />

        </>
    )
};

Prueba.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout titulo="PRUEBA">{page}</MainLayout>;
};

export default Prueba;
