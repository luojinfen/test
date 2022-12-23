import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { createFromIconfontCN } from '@ant-design/icons';
import styles from './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const HomePage = () => {
  const { name } = useModel('global');
  return (
    // <PageContainer ghost>
    //   <div className={styles.container}>
    //     <Guide name={trim(name)} />
    //   </div>

    // </PageContainer>

    <div
      style={{
        marginLeft: 100,
        height: '100vh',
      }}
    >
      <IconFont type="icon-TrophyOutlined" />
      <IconFont type="icon-facebook" />
      <IconFont type="icon-twitter" />

      {/* <ProLayout
        location={{
          pathname: '/articles/new',
        }}
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        route={{
          routes: [
            {
              path: '/home',
              name: '收藏',
              icon: 'icon-cloud-upload-outlined',
            },
            {
              path: '/home/overview',
              name: 'FaceBook',
              icon: 'icon-facebook',
            },
            {
              path: '/home/search',
              name: 'Twitter',
              icon: 'icon-twitter',
            },
          ],
        }}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout> */}
    </div>
  );
};

export default HomePage;
