<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_017zk5f" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="18.13.2">
  <bpmn:collaboration id="Collaboration_0mywomf">
    <bpmn:participant id="Participant_1595ei9" name="Processo de Atendimento em Clínica de Psicologia com Suporte de Sistema We" processRef="Process_1noqf8h" />
  </bpmn:collaboration>
  <bpmn:process id="Process_1noqf8h" isExecutable="false">
    <bpmn:laneSet id="LaneSet_1pjdohb">
      <bpmn:lane id="Lane_02d847m" name="Paciente">
        <bpmn:flowNodeRef>StartEvent_1r6whgt</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_0m1y27o" name="Sistema">
        <bpmn:flowNodeRef>Activity_1j1hyul</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Event_0bb579l</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_1nw3sry</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_1k4d7zu</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_1v07lho</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_0u8icg5</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Event_1okcgx1</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_02yv1ct" name="Psicologo">
        <bpmn:flowNodeRef>Activity_10ur6ni</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_0zd2jgx</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_1i76g5p</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_1uq4lg5</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Gateway_1o69295</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="StartEvent_1r6whgt" name="Solicita Agendamento">
      <bpmn:outgoing>Flow_0a37vsw</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Activity_10ur6ni" name="Verifica Agenda">
      <bpmn:incoming>Flow_0a37vsw</bpmn:incoming>
      <bpmn:outgoing>Flow_061rick</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_0zd2jgx" name="Agenda Consulta">
      <bpmn:incoming>Flow_061rick</bpmn:incoming>
      <bpmn:outgoing>Flow_0b7e3ls</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_1j1hyul" name="Atualiza horários">
      <bpmn:incoming>Flow_0b7e3ls</bpmn:incoming>
    </bpmn:task>
    <bpmn:startEvent id="Event_0bb579l" name="Inicio da Consulta">
      <bpmn:outgoing>Flow_0vlwlfa</bpmn:outgoing>
      <bpmn:timerEventDefinition id="TimerEventDefinition_1je6amd" />
    </bpmn:startEvent>
    <bpmn:task id="Activity_1i76g5p" name="Inicia a Consulta">
      <bpmn:incoming>Flow_0vlwlfa</bpmn:incoming>
      <bpmn:outgoing>Flow_1gpnbyh</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_1uq4lg5" name="Faz anotações">
      <bpmn:incoming>Flow_152uplv</bpmn:incoming>
      <bpmn:outgoing>Flow_06ql587</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_1nw3sry" name="Abre a interface de atendimento">
      <bpmn:incoming>Flow_1gpnbyh</bpmn:incoming>
      <bpmn:outgoing>Flow_152uplv</bpmn:outgoing>
    </bpmn:task>
    <bpmn:inclusiveGateway id="Gateway_1o69295">
      <bpmn:incoming>Flow_06ql587</bpmn:incoming>
      <bpmn:outgoing>Flow_1llxdx1</bpmn:outgoing>
      <bpmn:outgoing>Flow_1r4gqty</bpmn:outgoing>
    </bpmn:inclusiveGateway>
    <bpmn:task id="Activity_1k4d7zu" name="Salva anotações">
      <bpmn:incoming>Flow_1llxdx1</bpmn:incoming>
      <bpmn:outgoing>Flow_0xjqa77</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_1v07lho" name="Permite anexar documentação">
      <bpmn:incoming>Flow_1r4gqty</bpmn:incoming>
      <bpmn:outgoing>Flow_0d0h9c7</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_0u8icg5" name="Salva Alterações">
      <bpmn:incoming>Flow_0d0h9c7</bpmn:incoming>
      <bpmn:outgoing>Flow_11scwye</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="Event_1okcgx1">
      <bpmn:incoming>Flow_11scwye</bpmn:incoming>
      <bpmn:incoming>Flow_0xjqa77</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0a37vsw" sourceRef="StartEvent_1r6whgt" targetRef="Activity_10ur6ni" />
    <bpmn:sequenceFlow id="Flow_061rick" sourceRef="Activity_10ur6ni" targetRef="Activity_0zd2jgx" />
    <bpmn:sequenceFlow id="Flow_0b7e3ls" sourceRef="Activity_0zd2jgx" targetRef="Activity_1j1hyul" />
    <bpmn:sequenceFlow id="Flow_0vlwlfa" sourceRef="Event_0bb579l" targetRef="Activity_1i76g5p" />
    <bpmn:sequenceFlow id="Flow_1gpnbyh" sourceRef="Activity_1i76g5p" targetRef="Activity_1nw3sry" />
    <bpmn:sequenceFlow id="Flow_152uplv" sourceRef="Activity_1nw3sry" targetRef="Activity_1uq4lg5" />
    <bpmn:sequenceFlow id="Flow_06ql587" sourceRef="Activity_1uq4lg5" targetRef="Gateway_1o69295" />
    <bpmn:sequenceFlow id="Flow_1llxdx1" name="Anotações online" sourceRef="Gateway_1o69295" targetRef="Activity_1k4d7zu" />
    <bpmn:sequenceFlow id="Flow_1r4gqty" name="Anotações físicas" sourceRef="Gateway_1o69295" targetRef="Activity_1v07lho" />
    <bpmn:sequenceFlow id="Flow_0xjqa77" sourceRef="Activity_1k4d7zu" targetRef="Event_1okcgx1" />
    <bpmn:sequenceFlow id="Flow_0d0h9c7" sourceRef="Activity_1v07lho" targetRef="Activity_0u8icg5" />
    <bpmn:sequenceFlow id="Flow_11scwye" sourceRef="Activity_0u8icg5" targetRef="Event_1okcgx1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0mywomf">
      <bpmndi:BPMNShape id="Participant_1595ei9_di" bpmnElement="Participant_1595ei9" isHorizontal="true">
        <dc:Bounds x="160" y="80" width="1480" height="450" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_02d847m_di" bpmnElement="Lane_02d847m" isHorizontal="true">
        <dc:Bounds x="190" y="80" width="1450" height="138" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_0m1y27o_di" bpmnElement="Lane_0m1y27o" isHorizontal="true">
        <dc:Bounds x="190" y="218" width="1450" height="172" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_02yv1ct_di" bpmnElement="Lane_02yv1ct" isHorizontal="true">
        <dc:Bounds x="190" y="390" width="1450" height="140" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1r6whgt">
        <dc:Bounds x="252" y="132" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="236" y="96" width="68" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_10ur6ni_di" bpmnElement="Activity_10ur6ni">
        <dc:Bounds x="220" y="420" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0zd2jgx_di" bpmnElement="Activity_0zd2jgx">
        <dc:Bounds x="370" y="420" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1j1hyul_di" bpmnElement="Activity_1j1hyul">
        <dc:Bounds x="370" y="260" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0rbxgxj_di" bpmnElement="Event_0bb579l">
        <dc:Bounds x="702" y="282" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="676" y="258" width="88" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1i76g5p_di" bpmnElement="Activity_1i76g5p">
        <dc:Bounds x="670" y="420" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1uq4lg5_di" bpmnElement="Activity_1uq4lg5">
        <dc:Bounds x="930" y="420" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1nw3sry_di" bpmnElement="Activity_1nw3sry">
        <dc:Bounds x="820" y="260" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0vezo4r_di" bpmnElement="Gateway_1o69295">
        <dc:Bounds x="1075" y="435" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1k4d7zu_di" bpmnElement="Activity_1k4d7zu">
        <dc:Bounds x="1050" y="260" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1v07lho_di" bpmnElement="Activity_1v07lho">
        <dc:Bounds x="1190" y="260" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0u8icg5_di" bpmnElement="Activity_0u8icg5">
        <dc:Bounds x="1360" y="260" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1okcgx1_di" bpmnElement="Event_1okcgx1">
        <dc:Bounds x="1532" y="282" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0a37vsw_di" bpmnElement="Flow_0a37vsw">
        <di:waypoint x="270" y="168" />
        <di:waypoint x="270" y="420" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_061rick_di" bpmnElement="Flow_061rick">
        <di:waypoint x="320" y="460" />
        <di:waypoint x="370" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0b7e3ls_di" bpmnElement="Flow_0b7e3ls">
        <di:waypoint x="420" y="420" />
        <di:waypoint x="420" y="340" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0vlwlfa_di" bpmnElement="Flow_0vlwlfa">
        <di:waypoint x="720" y="318" />
        <di:waypoint x="720" y="420" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1gpnbyh_di" bpmnElement="Flow_1gpnbyh">
        <di:waypoint x="770" y="460" />
        <di:waypoint x="795" y="460" />
        <di:waypoint x="795" y="300" />
        <di:waypoint x="820" y="300" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_152uplv_di" bpmnElement="Flow_152uplv">
        <di:waypoint x="920" y="300" />
        <di:waypoint x="980" y="300" />
        <di:waypoint x="980" y="420" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_06ql587_di" bpmnElement="Flow_06ql587">
        <di:waypoint x="1030" y="460" />
        <di:waypoint x="1075" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1llxdx1_di" bpmnElement="Flow_1llxdx1">
        <di:waypoint x="1100" y="435" />
        <di:waypoint x="1100" y="340" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1108" y="393" width="84" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1r4gqty_di" bpmnElement="Flow_1r4gqty">
        <di:waypoint x="1125" y="460" />
        <di:waypoint x="1240" y="460" />
        <di:waypoint x="1240" y="340" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1140" y="442" width="86" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0d0h9c7_di" bpmnElement="Flow_0d0h9c7">
        <di:waypoint x="1290" y="300" />
        <di:waypoint x="1360" y="300" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11scwye_di" bpmnElement="Flow_11scwye">
        <di:waypoint x="1460" y="300" />
        <di:waypoint x="1532" y="300" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0xjqa77_di" bpmnElement="Flow_0xjqa77">
        <di:waypoint x="1100" y="260" />
        <di:waypoint x="1100" y="230" />
        <di:waypoint x="1550" y="230" />
        <di:waypoint x="1550" y="282" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
