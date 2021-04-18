import {
  SiteMapContainer,
  SiteMapWrapper,
  SiteMapItems,
  SiteMapLinkTitle,
  SiteMapLink,
} from "./SiteMap.styled";
import { siteMapData } from "./siteMapData";

const SiteMap: React.FC = () => {
  return (
    <SiteMapContainer>
      <SiteMapWrapper>
        {siteMapData.map((data) => (
          <SiteMapItems>
            <SiteMapLinkTitle>{data.section}</SiteMapLinkTitle>
            {data.links.map((link) => (
              <SiteMapLink to={link.linkTo}>{link.title}</SiteMapLink>
            ))}
          </SiteMapItems>
        ))}
      </SiteMapWrapper>
    </SiteMapContainer>
  );
};

export default SiteMap;
