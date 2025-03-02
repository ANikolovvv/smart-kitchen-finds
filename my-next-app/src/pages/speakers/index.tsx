import Box from "@/components/atoms/Box";
import PageWrapper from "@/components/atoms/PageWrapper";
import ProductCard from "@/components/atoms/ProductCard";
import Title from "@/components/atoms/Title";
import React, { FC } from "react";
import { speakers } from "./speakers";

const Speakers: FC = () => {
  return (
    <PageWrapper>
      <Title>Talk to the Future: Top Smart Speakers for Your Home</Title>
      <Box className="flex flex-wrap justify-center gap-4 p-4">
        {speakers.map((s) => (
          <ProductCard
            key={s.name}
            name={s.name}
            price={s.price}
            description={s.description}
            affiliateLink="https://www.amazon.com/TMKB-M1SE-High-Precision-Programmable-Customizable/dp/B0BGKBT1JG/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.12129333-2117-4490-9c17-6d31baf0582a&dib=eyJ2IjoiMSJ9.ENDxQgLqKuUZiHj6uRPQNdYty5uQsO0ZtMyfD3Xntn0lDcPNN2sn1C-xY720lZ-n3FvYwOQ5lEygYimagdKXgsPEN9VG21dmphlGhJyId2HNppSGz0X99UzZf6NYRFMWPgEGBXeGnDvAcbtMDd8QmtE3UK4Ed0caJ-xZzoV8smnucIRLuXK9KiGniHg9sDwczwRanSuB8rVr7ARahVvvdspVHhEkZpoxkBk5wLs7wOA.4Lm4NKEcOpBlbZlfl11XZf3FTCSefUboFUp8nN7sTIM&dib_tag=se&keywords=gaming+mouse&pd_rd_r=9b5a19f0-42e0-4bde-9187-fd4b017f2d11&pd_rd_w=4tB2S&pd_rd_wg=XIHSd&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=04G6EAPM01FJTQD5F7A3&qid=1731605078&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
          />
        ))}
      </Box>
    </PageWrapper>
  );
};

export default Speakers;
