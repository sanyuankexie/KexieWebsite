import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { GithubOutlined, CodeFilled } from '@ant-design/icons';
import { Typography } from 'antd';
import style from './css/index.module.scss';
import './css/dirty.scss';

import Section from "../../component/Section";
import CommentList from "./CommentList";
import ProjectList from "./ProjectList";
import LearningDirectionList from "./LearningDirectionList";
import Timeline from './Timeline';
import { Logo, Video } from '../../static/cos';
import ContestList from './ContestList';
import Departments from './Departments';
import { useScrollAnimationRefs, useScrollHandler } from '../../hooks';

const { Title } = Typography;

function Welcome() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

    const vantaRef = useRef<HTMLDivElement>(null!);
    useEffect(() => {
        // @ts-ignore
        const effect = VANTA.HALO({
            el: "#wdnmd",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            size: 1,
            yOffset: 0.19,
            backgroundColor: "#252630"
        });

        return () => {
            effect.destroy();
        }
    }, []);
    

    return (
        <div>
            <section id="wdnmd" className={`${style.helloContainer} default-box-shadow`}>
                <div ref={vantaRef} className={style.background}></div>

                <div className={style.blank} style={{ height: "20vh" }} />
                <img src={Logo.Kexie}
                    alt=""
                    width={200}
                    height={200}
                    style={{ zIndex: 1 }} />
                <Title className={`${style.title} default-font-shadow`} level={1} >桂电三院科协</Title>

                <p className={`${style.description} default-font-shadow`}>科技融入梦想，创新点缀人生</p>

                <div className={style.btnGroup}>

                    <Button
                        className={style.btn}
                        type="primary"
                        shape="round"
                        icon={<GithubOutlined />}
                        size={"large"}
                        href="https://jq.qq.com/?_wv=1027&k=n7WP5LTH"
                        target="__blank"
                    >
                        加入我们
                    </Button>

                    <Button
                        className={style.btn}
                        type="primary"
                        shape="round"
                        icon={<CodeFilled />}
                        size={"large"}
                        href="https://oj.kexie.space"
                        target="__blank"
                    >
                        练习编程
                    </Button>
                </div>
            </section>

            <Section
                title="宣传视频"
                description="可以稍微期待一下呢........"
                bannerStyle={{ width: "80%" }}
                bannerClassName={`aspect-ratio`}>
                <video
                    controls
                    style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" }}
                    ref={addScrollAnimationRefs}
                    poster={Video.MachineLearning.poster}
                >
                    {/* <source src={Video.MachineLearning.url} type="video/mp4"></source> */}
                </video>
            </Section>

            <Section
                title="Mikutap"
                description="一个有趣的音乐互动网站"
                bannerStyle={{ width: "80%", height: "80vh" }}>
                <iframe src="https://mikutap.therainisme.com"
                    height="100%"
                    width="100%"
                    frameBorder="0"
                    scrolling="0"
                    style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" }}
                    ref={addScrollAnimationRefs}
                ></iframe>
            </Section>

            <Section
                title="深度学习"
                description="趣味视频 “当逮虾户遇上目标检测”"
                bannerStyle={{ width: "80%" }}
                bannerClassName={`aspect-ratio`}
            >
                <video
                    controls
                    style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d" }}
                    ref={addScrollAnimationRefs}
                >
                    <source src={Video.MachineLearning.url} type="video/mp4"></source>
                </video>


            </Section>

            <Section title="四大部门" description="科协有四大部门，不同的部门下有不同的学习方向">
                <div className={style.sectionContainer}>
                    <Departments />
                </div>
            </Section>

            <Section title="学习方向">
                <div className={style.sectionContainer}>
                    <LearningDirectionList />
                </div>
            </Section>

            <Section title="招新时间线">
                <div className={style.sectionContainer}>
                    <Timeline />
                </div>
            </Section>

            <Section title="近年参赛获奖" description="很多，还在整理当中，下面展示是2020年国家级、省部级获奖的一部分......">
                <div className={style.sectionContainer}>
                    <ContestList />
                </div>
            </Section>

            <Section title="心灵之声">
                <div className={style.sectionContainer} style={{ marginBottom: "10vh" }}>
                    <div className={style.subSectionContainer}>
                        <CommentList />
                    </div>
                    <div className={style.subSectionContainer}>
                        <ProjectList />
                    </div>
                </div>
            </Section>


        </div>
    );
}

export default Welcome;