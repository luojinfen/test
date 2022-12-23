import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
// console.log("🚀 ~ file: index.tsx:5 ~ useRequest", useRequest)
// import { connect } from '@@/plugin-dva';
// console.log("🚀 ~ file: index.tsx:6 ~ connect", connect)
// import { debounce } from 'lodash'
// console.log("🚀 ~ file: index.tsx:7 ~ debounce", debounce)
import { stringify } from 'querystring';
console.log('🚀 ~ file: index.tsx:10 ~ parse', stringify({ a: 'sswsw' }));
import styles from './index.less';
import DataSet from '@antv/data-set';
console.log('🚀 ~ file: index.tsx:14 ~ DataSet', DataView123);



// console.log('🚀 ~ file: index.tsx:14 ~ DataView', DataView);
const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
