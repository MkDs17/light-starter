import { useI18n } from '../../hooks/use-i18n'
import Layout from '../../layout'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <Layout>
      <div className="not-found">
        <h6>{t('not-found.title')}</h6>
        <p>{t('not-found.message')}</p>
      </div>
    </Layout>
  )
}

// const Container = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   justify-content: center;
//   width: 100%;

//   & > h6 {
//     font-size: 48px;
//   }

//   & > p {
//     font-size: 24px;
//   }
// `
