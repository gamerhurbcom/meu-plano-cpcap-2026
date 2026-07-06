import { Modulo } from '@/types';

export const modulos: Modulo[] = [
  {
    id: 'm1',
    titulo: 'Módulo 1 — Organização de Computadores',
    aulas: [
      {
        id: 'm1a1',
        moduloId: 'm1',
        titulo: 'Hardware, software e firmware',
        resumo: 'Conceitos básicos de hardware, software e firmware, e os principais componentes do computador.',
        conteudo: `Hardware é a parte física do computador: tudo que você pode tocar — placa-mãe, processador, memória, disco, teclado, monitor. Software é o conjunto de instruções (programas) que dizem ao hardware o que fazer; divide-se em software de sistema (o sistema operacional, que gerencia o hardware) e software aplicativo (programas que o usuário utiliza, como editores de texto e navegadores). Firmware é um tipo especial de software gravado diretamente em um chip de memória não volátil (geralmente ROM ou memória flash), que controla o funcionamento básico de um dispositivo — exemplos clássicos são a BIOS/UEFI da placa-mãe e o software interno de uma impressora ou roteador.

Componentes principais de um computador:
- CPU (processador) — executa as instruções
- Memória RAM — armazenamento temporário e volátil usado durante a execução
- Armazenamento secundário (HD/SSD) — armazenamento permanente
- Placa-mãe — interliga todos os componentes
- Dispositivos de entrada e saída (E/S) — teclado, mouse, monitor, impressora

Dica de prova: bancas adoram cobrar a diferença entre hardware/software/firmware com exemplos práticos — associe sempre firmware a "algo embutido em um chip que raramente é alterado pelo usuário comum".`,
        checklist: ['Entendi a diferença entre hardware/software/firmware', 'Revisei componentes principais', 'Fiz exercícios de fixação'],
      },
      {
        id: 'm1a2',
        moduloId: 'm1',
        titulo: 'Memória RAM, ROM e cache',
        resumo: 'Hierarquia de memória: registradores, cache (L1/L2/L3), RAM e ROM.',
        conteudo: `A memória do computador é organizada em uma hierarquia: quanto mais rápida e cara, menor a capacidade; quanto mais lenta e barata, maior a capacidade.

Hierarquia (do mais rápido/menor para o mais lento/maior):
1. Registradores — dentro da própria CPU, velocidade máxima, capacidade mínima
2. Cache L1 — dentro do núcleo do processador, extremamente rápida, poucos KB
3. Cache L2 — um pouco mais lenta que L1, ainda dentro ou muito próxima do processador
4. Cache L3 — compartilhada entre núcleos, mais lenta que L1/L2, maior capacidade
5. Memória RAM — volátil (perde os dados ao desligar), usada para programas em execução
6. Memória secundária (HD/SSD) — não volátil, armazenamento permanente, muito mais lenta

RAM (Random Access Memory) é volátil: guarda dados e instruções dos programas em execução. Existem variações como DRAM (mais comum, precisa de "refresh" periódico) e SRAM (mais rápida e cara, usada em cache).

ROM (Read Only Memory) é não volátil: mantém dados mesmo sem energia, tradicionalmente somente leitura. Variações modernas (PROM, EPROM, EEPROM) permitem gravação controlada — é nela que fica gravada a BIOS/firmware.

Cache existe para reduzir a diferença de velocidade entre CPU (muito rápida) e RAM (mais lenta), guardando cópias dos dados mais usados recentemente perto do processador.

Dica de prova: memorize a ordem da hierarquia e o motivo de existir (equilíbrio entre velocidade, custo e capacidade).`,
        checklist: ['Entendi a hierarquia de memória', 'Diferenciei RAM de ROM', 'Estudei níveis de cache'],
      },
      {
        id: 'm1a3',
        moduloId: 'm1',
        titulo: 'CPU, ULA, UC e registradores',
        resumo: 'Funcionamento da CPU, ULA, Unidade de Controle e o ciclo busca-decodifica-executa.',
        conteudo: `A CPU (Central Processing Unit) é o "cérebro" do computador, responsável por executar instruções. Ela é composta principalmente por:

- ULA (Unidade Lógica e Aritmética) — realiza operações matemáticas (soma, subtração) e lógicas (AND, OR, comparações)
- UC (Unidade de Controle) — coordena o funcionamento da CPU, busca instruções na memória, decodifica e direciona a execução
- Registradores — pequenas áreas de memória extremamente rápidas dentro da CPU, usadas para guardar dados temporários durante a execução (ex: acumulador, contador de programa/PC, registrador de instrução/RI)

Ciclo de instrução (busca-decodifica-executa), também chamado ciclo de máquina:
1. Busca (fetch) — a UC busca a próxima instrução na memória, usando o endereço indicado pelo Contador de Programa (PC)
2. Decodificação (decode) — a instrução é interpretada para saber qual operação deve ser realizada
3. Execução (execute) — a ULA (ou outro componente) executa a operação
4. Armazenamento do resultado — o resultado é gravado em um registrador ou na memória, e o PC é atualizado para apontar para a próxima instrução

Esse ciclo se repete continuamente, milhões/bilhões de vezes por segundo (medido em Hz — a "velocidade do clock").

Dica de prova: a sequência busca → decodifica → executa é praticamente garantida em prova. Saiba explicar o papel de cada etapa.`,
        checklist: ['Entendi o ciclo de instrução', 'Conheço a função da ULA', 'Conheço a função da UC'],
      },
      {
        id: 'm1a4',
        moduloId: 'm1',
        titulo: 'Sistemas de numeração',
        resumo: 'Binário, octal, decimal e hexadecimal, com conversões entre as bases.',
        conteudo: `Computadores trabalham internamente em binário (base 2), mas para facilitar a leitura humana usamos também octal (base 8) e hexadecimal (base 16).

Decimal (base 10): dígitos de 0 a 9. É o sistema que usamos no dia a dia.
Binário (base 2): dígitos 0 e 1. Cada posição vale uma potência de 2.
Octal (base 8): dígitos de 0 a 7. Cada posição vale uma potência de 8.
Hexadecimal (base 16): dígitos 0-9 e A-F (onde A=10, B=11, C=12, D=13, E=14, F=15). Cada posição vale uma potência de 16.

Conversão binário → decimal: multiplique cada dígito pela potência de 2 correspondente à posição e some.
Exemplo: 1011(2) = 1x2³ + 0x2² + 1x2¹ + 1x2⁰ = 8+0+2+1 = 11(10)

Conversão decimal → binário: divisões sucessivas por 2, anotando os restos de baixo para cima.
Exemplo: 11 ÷ 2 = 5 resto 1; 5 ÷ 2 = 2 resto 1; 2 ÷ 2 = 1 resto 0; 1 ÷ 2 = 0 resto 1 → lendo de baixo para cima: 1011(2)

Conversão binário → hexadecimal: agrupe os bits em grupos de 4 (a partir da direita) e converta cada grupo.
Exemplo: 1011 1100(2) → 1011=B, 1100=C → BC(16)

Conversão binário → octal: agrupe os bits em grupos de 3 (a partir da direita).
Exemplo: 101 110(2) → 101=5, 110=6 → 56(8)

Dica de prova: pratique até fazer de cabeça — questões de conversão são praticamente garantidas e rápidas de resolver se você souber o método.`,
        checklist: ['Converto binário-decimal', 'Converto hexadecimal-decimal', 'Pratiquei exercícios de conversão'],
      },
      {
        id: 'm1a5',
        moduloId: 'm1',
        titulo: 'Aritmética binária',
        resumo: 'Soma, subtração e complemento de 2 em binário.',
        conteudo: `Soma em binário segue as mesmas regras da soma decimal, mas só existem os dígitos 0 e 1:
0+0=0 | 0+1=1 | 1+0=1 | 1+1=0 (vai 1, "carry")

Exemplo:
  1011
+ 0110
-------
 10001

Complemento de 2 é a forma padrão de representar números negativos em binário, e também é usado para fazer subtração através de soma. Para calcular o complemento de 2 de um número:
1. Inverta todos os bits (complemento de 1)
2. Some 1 ao resultado

Exemplo: representar -5 em 8 bits.
5 em binário (8 bits) = 00000101
Inverter os bits = 11111010
Somar 1 = 11111011 → esse é -5 em complemento de 2

Subtração usando complemento de 2: A - B = A + (complemento de 2 de B). Isso permite que o processador use apenas circuitos de soma tanto para somar quanto para subtrair, simplificando o hardware.

Dica de prova: memorize o passo a passo do complemento de 2 (inverte + soma 1) — é a base de praticamente toda questão de representação de números negativos.`,
        checklist: ['Sei somar em binário', 'Sei calcular complemento de 2', 'Pratiquei exercícios'],
      },
      {
        id: 'm1a6',
        moduloId: 'm1',
        titulo: 'Representação de dados',
        resumo: 'Representação de inteiros, ponto flutuante e caracteres (ASCII/Unicode).',
        conteudo: `Números inteiros são representados em binário puro (sem sinal) ou em complemento de 2 (com sinal, permitindo negativos). O tamanho da representação (8, 16, 32, 64 bits) define o intervalo de valores possíveis.

Ponto flutuante representa números com casas decimais (reais). O padrão mais usado é o IEEE 754, que divide o número em três partes:
- Sinal (1 bit) — positivo ou negativo
- Expoente — a "ordem de grandeza" do número
- Mantissa (ou fração) — os dígitos significativos

Isso permite representar números muito grandes ou muito pequenos, mas com perda de precisão em certos casos (por isso operações com ponto flutuante podem gerar pequenos erros de arredondamento).

Representação de caracteres:
- ASCII (American Standard Code for Information Interchange) — usa 7 ou 8 bits, representa 128 (ou 256) caracteres: letras, números, símbolos e caracteres de controle. Exemplo: a letra 'A' = 65 em decimal.
- Unicode — padrão moderno que representa praticamente todos os caracteres de todos os idiomas do mundo, incluindo emojis. A codificação mais usada é a UTF-8, que é compatível com ASCII para os primeiros 128 caracteres, mas usa de 1 a 4 bytes para representar qualquer caractere.

Dica de prova: saiba que UTF-8 é retrocompatível com ASCII — é um ponto comum de pegadinha.`,
        checklist: ['Entendi representação de inteiros', 'Entendi ponto flutuante', 'Conheço ASCII e UTF-8'],
      },
      {
        id: 'm1a7',
        moduloId: 'm1',
        titulo: 'Lógica digital',
        resumo: 'Portas lógicas (AND, OR, NOT, NAND, NOR, XOR) e álgebra booleana.',
        conteudo: `Portas lógicas são os blocos de construção de todo circuito digital, operando sobre valores binários (0 = falso, 1 = verdadeiro).

- AND (E) — saída 1 somente se todas as entradas forem 1
- OR (OU) — saída 1 se pelo menos uma entrada for 1
- NOT (NÃO) — inverte a entrada (0 vira 1, 1 vira 0)
- NAND — o inverso do AND (saída 0 somente se todas as entradas forem 1)
- NOR — o inverso do OR (saída 1 somente se todas as entradas forem 0)
- XOR (OU exclusivo) — saída 1 se as entradas forem diferentes entre si

Tabela-verdade do AND (2 entradas):
0 AND 0 = 0 | 0 AND 1 = 0 | 1 AND 0 = 0 | 1 AND 1 = 1

Tabela-verdade do OR (2 entradas):
0 OR 0 = 0 | 0 OR 1 = 1 | 1 OR 0 = 1 | 1 OR 1 = 1

Tabela-verdade do XOR:
0 XOR 0 = 0 | 0 XOR 1 = 1 | 1 XOR 0 = 1 | 1 XOR 1 = 0

Álgebra booleana é o ramo da matemática que trabalha com esses valores lógicos (verdadeiro/falso) e as operações entre eles, sendo a base teórica para o projeto de circuitos digitais e para a lógica de programação (condicionais if/else usam exatamente essas operações).

Dica de prova: monte você mesmo as tabelas-verdade de cada porta até decorar — é comum a banca pedir para "calcular a saída" de um circuito simples combinando portas.`,
        checklist: ['Conheço as portas lógicas', 'Monto tabelas-verdade', 'Entendi álgebra booleana básica'],
      },
    ],
  },
  {
    id: 'm2',
    titulo: 'Módulo 2 — Sistemas Operacionais',
    aulas: [
      {
        id: 'm2a1',
        moduloId: 'm2',
        titulo: 'Tipos de sistemas operacionais',
        resumo: 'Monoprogramado, multiprogramado, tempo real e distribuído.',
        conteudo: `O Sistema Operacional (SO) é o software responsável por gerenciar os recursos de hardware e oferecer uma interface para os programas e o usuário. Principais tipos, quanto à forma de execução:

- Monoprogramado — executa apenas um programa por vez; enquanto ele roda, nenhum outro pode ser executado. Modelo mais antigo e simples.
- Multiprogramado — vários programas ficam na memória e o processador alterna entre eles, dando a impressão de execução simultânea (mesmo com um único núcleo). É a base dos SOs modernos como Windows e Linux.
- Tempo real (real-time) — precisa responder a eventos dentro de prazos rígidos e previsíveis (ex: sistemas embarcados de controle industrial, marcapassos). Divide-se em tempo real crítico (o prazo não pode ser perdido) e não crítico (atrasos são toleráveis, mas indesejados).
- Distribuído — o processamento é dividido entre vários computadores conectados em rede, que trabalham em conjunto como se fossem um único sistema, compartilhando recursos e tarefas.

Dica de prova: associe cada tipo a um exemplo de uso — monoprogramado (MS-DOS antigo), multiprogramado (Windows/Linux atuais), tempo real (sistemas embarcados), distribuído (clusters, sistemas em nuvem).`,
        checklist: ['Conheço os tipos de SO', 'Sei diferenciar cada tipo'],
      },
      {
        id: 'm2a2',
        moduloId: 'm2',
        titulo: 'Kernel, shell e chamadas de sistema',
        resumo: 'Estrutura interna do sistema operacional.',
        conteudo: `O Sistema Operacional pode ser dividido em camadas:

- Kernel (núcleo) — é o coração do SO, responsável por gerenciar diretamente o hardware: processador, memória, dispositivos de E/S. Roda com privilégios máximos ("modo kernel" ou "modo privilegiado").
- Shell — é a interface entre o usuário (ou um programa) e o kernel. Pode ser uma interface de linha de comando (como o Bash no Linux) ou gráfica. O shell interpreta comandos e solicita ao kernel que os execute.
- Chamadas de sistema (system calls) — são as "portas de entrada" que os programas usam para pedir serviços ao kernel, como abrir um arquivo, alocar memória ou criar um processo. Um programa comum roda em "modo usuário" e não pode acessar o hardware diretamente — precisa fazer uma chamada de sistema para que o kernel execute a operação em seu nome.

Fluxo típico: usuário digita um comando no shell → shell interpreta e, se necessário, invoca chamadas de sistema → kernel executa a operação de baixo nível → resultado retorna ao shell → shell mostra o resultado ao usuário.

Dica de prova: a distinção entre "modo usuário" (restrito) e "modo kernel" (privilegiado) é um ponto clássico de cobrança — só o kernel pode acessar o hardware diretamente.`,
        checklist: ['Entendi o papel do kernel', 'Entendi o papel do shell', 'Conheço chamadas de sistema'],
      },
      {
        id: 'm2a3',
        moduloId: 'm2',
        titulo: 'Processos e threads',
        resumo: 'Estados de processo, PCB, criação, e diferenças entre processos e threads.',
        conteudo: `Processo é um programa em execução — possui seu próprio espaço de memória, recursos alocados (arquivos abertos, por exemplo) e um contexto de execução isolado dos demais processos.

Estados de um processo:
- Novo — está sendo criado
- Pronto (ready) — aguardando para ser executado pelo processador
- Executando (running) — está atualmente sendo processado pela CPU
- Bloqueado (waiting/blocked) — aguardando algum evento externo (ex: leitura de disco, entrada do usuário)
- Terminado — finalizou sua execução

PCB (Process Control Block) é a estrutura de dados que o SO mantém para cada processo, guardando informações como estado atual, contador de programa, registradores, prioridade, memória alocada e arquivos abertos. É através do PCB que o SO consegue pausar um processo e retomá-lo depois exatamente de onde parou.

Thread é uma "linha de execução" dentro de um processo. Um mesmo processo pode ter múltiplas threads, que compartilham o mesmo espaço de memória e recursos, mas executam de forma independente. Isso torna a criação e troca entre threads muito mais leve e rápida do que entre processos completos.

Diferença central: processos são isolados entre si (memória própria); threads de um mesmo processo compartilham memória, o que facilita a comunicação entre elas, mas exige cuidado com sincronização (evitar que duas threads alterem o mesmo dado ao mesmo tempo).

Dica de prova: "processo = unidade isolada com recursos próprios; thread = unidade leve que compartilha recursos do processo pai" é a frase-chave para decorar.`,
        checklist: ['Conheço os estados de processo', 'Entendi o PCB', 'Diferenciei processo de thread'],
      },
      {
        id: 'm2a4',
        moduloId: 'm2',
        titulo: 'Escalonamento',
        resumo: 'Algoritmos de escalonamento: FCFS, SJF, Round Robin, Prioridade.',
        conteudo: `Escalonamento é a forma como o SO decide qual processo (dentre os que estão prontos) vai usar o processador em cada momento. Principais algoritmos:

- FCFS (First-Come, First-Served) — o processo que chega primeiro é executado primeiro, sem interrupção (não-preemptivo). Simples, mas pode causar o "efeito comboio": um processo longo atrasa todos os outros atrás dele.

- SJF (Shortest Job First) — executa primeiro o processo com menor tempo estimado de execução. Minimiza o tempo médio de espera, mas exige saber (ou estimar) a duração de cada processo antecipadamente.

- Round Robin — cada processo recebe uma fatia de tempo fixa (quantum); se não terminar nesse tempo, volta para o final da fila e o próximo processo é executado. É preemptivo e muito usado em sistemas interativos, pois garante que nenhum processo monopolize a CPU.

- Prioridade — cada processo recebe uma prioridade, e o de maior prioridade é executado primeiro. Pode ser preemptivo ou não. Risco: "starvation" (inanição) — processos de baixa prioridade podem nunca ser executados se sempre chegarem processos de prioridade maior.

Cálculo de tempo médio de espera (exemplo com FCFS): some o tempo de espera de cada processo (tempo que fica na fila antes de começar a executar) e divida pelo número de processos.

Dica de prova: pratique montar uma tabela com tempo de chegada e duração de 3-4 processos e calcular o tempo médio de espera para FCFS e Round Robin — é um tipo de questão numérica recorrente.`,
        checklist: ['Sei calcular tempo médio de espera', 'Conheço FCFS e SJF', 'Conheço Round Robin'],
      },
      {
        id: 'm2a5',
        moduloId: 'm2',
        titulo: 'Gerência de memória',
        resumo: 'Particionamento, paginação, segmentação e memória virtual.',
        conteudo: `A gerência de memória é responsável por alocar e controlar o uso da RAM entre os diversos processos em execução.

Particionamento: a memória é dividida em partições (fixas ou variáveis) e cada processo ocupa uma partição inteira. Simples, mas gera fragmentação (espaço desperdiçado).

Paginação: a memória é dividida em blocos de tamanho fixo chamados páginas (do lado do processo) e frames (do lado da memória física). O processo não precisa ocupar um espaço contíguo — suas páginas podem estar espalhadas pela memória física, o que elimina a fragmentação externa. Uma tabela de páginas mantém o mapeamento entre página e frame.

Segmentação: a memória é dividida em segmentos de tamanho variável, cada um representando uma unidade lógica do programa (ex: segmento de código, de dados, de pilha). Mais alinhado à estrutura lógica do programa, mas pode gerar fragmentação externa.

Memória virtual: técnica que permite executar programas maiores que a memória RAM disponível, usando o disco como "extensão" da memória (área de swap/paginação). Partes do processo que não estão sendo usadas ficam guardadas no disco.

Page fault (falta de página) ocorre quando o processo tenta acessar uma página que não está atualmente na memória RAM, exigindo que o SO a busque no disco.

Thrashing é uma situação crítica onde o sistema passa mais tempo trocando páginas entre RAM e disco do que executando processos de fato — geralmente causado por excesso de processos disputando pouca memória RAM disponível.

Dica de prova: relacione "thrashing" com "excesso de page faults" e "sistema lento apesar da CPU estar ociosa" — é a pegada clássica da questão.`,
        checklist: ['Entendi paginação', 'Entendi segmentação', 'Conheço page fault e thrashing'],
      },
      {
        id: 'm2a6',
        moduloId: 'm2',
        titulo: 'Linux e estrutura de diretórios',
        resumo: 'Distribuições, filosofia Linux e estrutura de diretórios.',
        conteudo: `Linux é um kernel de sistema operacional livre e de código aberto, criado por Linus Torvalds em 1991. "Distribuição" (distro) é o conjunto formado pelo kernel Linux mais um conjunto de programas, utilitários e um gerenciador de pacotes — exemplos: Ubuntu, Debian, Fedora, CentOS.

Filosofia Linux: tudo é um arquivo (inclusive dispositivos de hardware são representados como arquivos em /dev), sistema multiusuário e multitarefa desde a concepção, forte cultura de linha de comando e software livre.

Estrutura de diretórios (a partir da raiz "/"):
- / — diretório raiz, base de toda a hierarquia
- /bin — binários essenciais (comandos básicos do sistema)
- /etc — arquivos de configuração do sistema
- /home — diretórios pessoais dos usuários
- /root — diretório pessoal do superusuário (root)
- /var — arquivos variáveis, como logs
- /tmp — arquivos temporários
- /usr — programas e bibliotecas de usuário
- /dev — arquivos que representam dispositivos de hardware
- /mnt e /media — pontos de montagem de dispositivos externos

O usuário root é o superusuário, com permissões totais sobre o sistema — por segurança, o uso do dia a dia deve ser feito com um usuário comum, elevando privilégios apenas quando necessário (via sudo).

Dica de prova: memorize a função de /etc, /home, /bin e /var — são os mais cobrados em prova.`,
        checklist: ['Conheço a estrutura de diretórios', 'Entendi a filosofia Linux'],
      },
      {
        id: 'm2a7',
        moduloId: 'm2',
        titulo: 'Comandos Linux',
        resumo: 'ls, cd, cp, mv, rm, mkdir, ps, top, grep, find, tar, man.',
        conteudo: `Comandos essenciais de navegação e manipulação de arquivos:

- ls — lista os arquivos e diretórios (ls -l para detalhes, ls -a para incluir ocultos)
- cd — muda de diretório (cd .. volta um nível, cd ~ vai para o home)
- pwd — mostra o diretório atual
- mkdir — cria um diretório
- rmdir — remove diretório vazio
- cp origem destino — copia arquivos
- mv origem destino — move ou renomeia arquivos
- rm — remove arquivos (rm -r remove diretórios recursivamente, use com cautela)
- touch — cria um arquivo vazio ou atualiza sua data de modificação

Comandos de monitoramento e processos:
- ps — lista processos em execução (ps aux mostra todos os processos do sistema)
- top — mostra processos em tempo real, com uso de CPU e memória
- kill — encerra um processo pelo PID

Comandos de busca e texto:
- grep padrão arquivo — busca linhas que contenham um padrão de texto dentro de um arquivo
- find caminho -name "nome" — busca arquivos por nome a partir de um caminho
- man comando — abre o manual de ajuda de um comando

Compactação:
- tar -cvf arquivo.tar pasta/ — cria um arquivo tar
- tar -xvf arquivo.tar — extrai um arquivo tar

Dica de prova: monte sua própria tabela pessoal com os 20-30 comandos mais usados e pratique de cabeça, sem consultar — é comum a prova apresentar um comando e pedir o que ele faz, ou o inverso.`,
        checklist: ['Pratiquei os comandos básicos', 'Memorizei os principais comandos', 'Fiz tabela pessoal de comandos'],
      },
      {
        id: 'm2a8',
        moduloId: 'm2',
        titulo: 'Permissões, chmod e chown',
        resumo: 'Notação rwx, octal, usuários e grupos.',
        conteudo: `No Linux, todo arquivo e diretório tem permissões associadas a três categorias: dono (owner/user), grupo (group) e outros (others). Para cada categoria existem três tipos de permissão:

- r (read/leitura) — permite ler o conteúdo do arquivo ou listar o diretório
- w (write/escrita) — permite modificar o arquivo ou criar/remover arquivos no diretório
- x (execute/execução) — permite executar o arquivo (se for um programa/script) ou entrar no diretório

Ao rodar "ls -l" você vê algo como: -rwxr-xr--
- O primeiro caractere indica o tipo (- para arquivo comum, d para diretório)
- Os 3 próximos (rwx) são as permissões do dono
- Os 3 seguintes (r-x) são as permissões do grupo
- Os últimos 3 (r--) são as permissões de outros

Notação octal: cada permissão vale um número — r=4, w=2, x=1 (soma-se conforme o que está ativo).
- rwx = 4+2+1 = 7
- r-x = 4+0+1 = 5
- r-- = 4+0+0 = 4

Assim, rwxr-xr-- corresponde a 754.

Comandos:
- chmod 754 arquivo — define as permissões usando notação octal
- chmod u+x arquivo — adiciona permissão de execução ao dono (notação simbólica: u=user, g=group, o=others, a=all)
- chown usuario:grupo arquivo — muda o dono e o grupo do arquivo

Dica de prova: pratique converter rwx em números e números em rwx até fazer de cabeça — é quase certo cair uma questão pedindo o valor octal de uma permissão simbólica ou vice-versa.`,
        checklist: ['Sei calcular permissões octais', 'Sei usar chmod', 'Sei usar chown'],
      },
      {
        id: 'm2a9',
        moduloId: 'm2',
        titulo: 'Redirecionamento e pipe',
        resumo: 'Operadores >, >> , < e pipe |.',
        conteudo: `Redirecionamento permite controlar de onde vem a entrada e para onde vai a saída de um comando:

- > — redireciona a saída de um comando para um arquivo, sobrescrevendo o conteúdo existente
  Exemplo: ls > lista.txt (salva a lista de arquivos em lista.txt, apagando o conteúdo anterior)
- >> — redireciona a saída para um arquivo, mas adiciona ao final (não sobrescreve)
  Exemplo: echo "nova linha" >> arquivo.txt
- < — redireciona um arquivo como entrada de um comando
  Exemplo: comando < arquivo.txt

Pipe (|) — encadeia comandos, usando a saída de um comando como entrada do próximo. É uma das ferramentas mais poderosas do Linux, permitindo combinar comandos simples para tarefas complexas.
Exemplo: ps aux | grep firefox (lista todos os processos e filtra apenas os que contêm "firefox")

Comandos comumente usados com pipe:
- grep — filtra linhas que casam com um padrão
- sort — ordena linhas
- head -n — mostra as primeiras n linhas
- tail -n — mostra as últimas n linhas
- wc -l — conta o número de linhas

Exemplo combinado: cat arquivo.txt | grep erro | sort | head -5
(busca a palavra "erro" no arquivo, ordena os resultados e mostra apenas os 5 primeiros)

Dica de prova: entenda o pipe como "a saída de um vira a entrada do outro" — questões costumam pedir o resultado de um comando encadeado.`,
        checklist: ['Sei usar redirecionamento', 'Sei usar pipes', 'Pratiquei grep, find, sort'],
      },
    ],
  },
  {
    id: 'm3',
    titulo: 'Módulo 3 — Redes de Computadores',
    prioridade: 'maxima',
    aulas: [
      {
        id: 'm3a1',
        moduloId: 'm3',
        titulo: 'Tipos de redes',
        resumo: 'LAN, MAN, WAN, PAN.',
        conteudo: `Redes são classificadas principalmente pela abrangência geográfica:

- PAN (Personal Area Network) — rede de alcance muito curto, geralmente ao redor de uma pessoa (ex: Bluetooth entre celular e fone de ouvido).
- LAN (Local Area Network) — rede local, restrita a um prédio ou campus (ex: rede de uma casa, escritório ou escola). Alta velocidade, baixa latência, geralmente de propriedade privada.
- MAN (Metropolitan Area Network) — abrange uma cidade ou região metropolitana, interligando várias LANs.
- WAN (Wide Area Network) — rede de longa distância, cobrindo países ou continentes. A internet é o maior exemplo de WAN.

Dica de prova: a ordem crescente de abrangência é PAN < LAN < MAN < WAN — questões costumam pedir para classificar um cenário descrito (ex: "rede que interliga computadores de um mesmo escritório" = LAN).`,
        checklist: ['Conheço os tipos de rede'],
      },
      {
        id: 'm3a2',
        moduloId: 'm3',
        titulo: 'Topologias',
        resumo: 'Barramento, estrela, anel, malha.',
        conteudo: `Topologia é a forma como os dispositivos de uma rede estão fisicamente ou logicamente conectados.

- Barramento (bus) — todos os dispositivos compartilham um único cabo central. Simples e barata, mas se o cabo principal falhar, toda a rede para; e o desempenho cai conforme mais dispositivos são adicionados.
- Estrela (star) — todos os dispositivos se conectam a um ponto central (um switch ou hub). É a topologia mais usada atualmente: se um cabo falhar, apenas aquele dispositivo é afetado, mas se o ponto central falhar, toda a rede cai.
- Anel (ring) — cada dispositivo se conecta a exatamente dois outros, formando um círculo; os dados circulam em uma direção (ou nos dois sentidos, em anel duplo). Uma falha em um ponto pode comprometer toda a rede, dependendo da implementação.
- Malha (mesh) — cada dispositivo se conecta a vários (ou todos) os outros dispositivos, criando redundância de caminhos. Mais resiliente a falhas, porém mais cara e complexa de implementar.

Dica de prova: a topologia estrela é a mais cobrada por ser a mais usada na prática (redes Ethernet modernas com switch central).`,
        checklist: ['Conheço as topologias de rede'],
      },
      {
        id: 'm3a3',
        moduloId: 'm3',
        titulo: 'Modelo OSI',
        resumo: '7 camadas, suas funções e protocolos associados.',
        conteudo: `O modelo OSI (Open Systems Interconnection) divide a comunicação em rede em 7 camadas, cada uma com uma função específica. De cima para baixo:

7. Aplicação — interface com o usuário e os programas (HTTP, FTP, SMTP, DNS)
6. Apresentação — tradução, formatação, criptografia e compressão de dados (SSL/TLS, JPEG, ASCII)
5. Sessão — estabelece, gerencia e encerra sessões de comunicação entre aplicações
4. Transporte — garante entrega confiável (ou não) dos dados fim a fim (TCP, UDP)
3. Rede — endereçamento lógico e roteamento entre redes diferentes (IP, roteadores)
2. Enlace (Data Link) — endereçamento físico (MAC), controle de erros no enlace, switches
1. Física — transmissão de bits pelo meio físico (cabos, sinais elétricos/ópticos/rádio)

Um jeito de memorizar a ordem (de cima para baixo): "Todos Os Sistemas Têm Redes Em Funcionamento" (Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace, Física... adapte para sua própria frase mnemônica).

Cada camada só se comunica diretamente com a camada equivalente do outro lado (comunicação "par a par" lógica), mas fisicamente os dados passam por todas as camadas ao descer no emissor e ao subir no receptor.

Dica de prova: saiba a ordem das 7 camadas de cor e associe pelo menos um protocolo/dispositivo a cada uma — é a base para praticamente todo o conteúdo de redes.`,
        checklist: ['Decorei as 7 camadas', 'Sei a função de cada camada', 'Associei protocolos às camadas'],
      },
      {
        id: 'm3a4',
        moduloId: 'm3',
        titulo: 'Modelo TCP/IP',
        resumo: '4 camadas e comparação com o modelo OSI.',
        conteudo: `O modelo TCP/IP é o modelo prático usado de fato na internet, mais simples que o OSI, com 4 camadas:

4. Aplicação — corresponde às camadas 5, 6 e 7 do OSI (Sessão, Apresentação e Aplicação). Protocolos: HTTP, FTP, DNS, SMTP.
3. Transporte — corresponde à camada 4 do OSI. Protocolos: TCP, UDP.
2. Internet — corresponde à camada 3 do OSI (Rede). Protocolo principal: IP.
1. Acesso à rede (ou Interface de rede) — corresponde às camadas 1 e 2 do OSI (Física e Enlace).

Comparação resumida:
OSI (7 camadas): Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace, Física
TCP/IP (4 camadas): Aplicação, Transporte, Internet, Acesso à Rede

O modelo OSI é mais didático e detalhado (usado para ensino e referência); o TCP/IP é o que efetivamente roda na internet.

Dica de prova: memorize o mapeamento — as 3 camadas superiores do OSI viram uma única camada de Aplicação no TCP/IP.`,
        checklist: ['Conheço as 4 camadas TCP/IP', 'Sei comparar com OSI'],
      },
      {
        id: 'm3a5',
        moduloId: 'm3',
        titulo: 'Camada física e enlace',
        resumo: 'Meios de transmissão, MAC, CRC, switches, Ethernet.',
        conteudo: `Camada física: cuida da transmissão de bits brutos pelo meio físico — cabos de cobre (par trançado), fibra óptica, ondas de rádio (Wi-Fi). Define características elétricas, ópticas, taxas de transmissão e conectores.

Camada de enlace: organiza os bits em quadros (frames), controla o acesso ao meio compartilhado e detecta (e às vezes corrige) erros de transmissão.

- Endereço MAC (Media Access Control) — endereço físico único de 48 bits gravado na placa de rede de cada dispositivo, usado para identificar equipamentos dentro de uma mesma rede local.
- CRC (Cyclic Redundancy Check) — técnica de detecção de erros: o emissor calcula um valor a partir dos dados e o anexa ao quadro; o receptor recalcula e compara para verificar se houve corrupção durante a transmissão.
- Switch — dispositivo de camada de enlace que encaminha quadros com base no endereço MAC de destino, criando um caminho direto entre origem e destino (ao contrário do hub, que repete o sinal para todas as portas).
- Ethernet — padrão mais usado para redes locais cabeadas, define como os quadros são formados e transmitidos.

Dica de prova: switches trabalham na camada de enlace usando MAC; roteadores trabalham na camada de rede usando IP — essa distinção é cobrada com frequência.`,
        checklist: ['Entendi enquadramento', 'Conheço endereço MAC', 'Entendi CRC'],
      },
      {
        id: 'm3a6',
        moduloId: 'm3',
        titulo: 'IPv4, máscaras e sub-redes',
        resumo: 'Classes, máscara de sub-rede, CIDR e VLSM.',
        conteudo: `Um endereço IPv4 tem 32 bits, escrito em 4 grupos de 8 bits (octetos) separados por pontos, cada octeto variando de 0 a 255 (ex: 192.168.1.10).

Classes tradicionais de endereços IPv4:
- Classe A: 0.0.0.0 a 127.255.255.255 — poucos endereços de rede, muitos hosts
- Classe B: 128.0.0.0 a 191.255.255.255 — equilíbrio entre redes e hosts
- Classe C: 192.0.0.0 a 223.255.255.255 — muitas redes, poucos hosts por rede (a mais comum em redes domésticas/pequenas)

Máscara de sub-rede define quantos bits do endereço representam a rede e quantos representam o host. Ex: máscara 255.255.255.0 (ou /24) significa que os primeiros 24 bits são de rede e os últimos 8 são de host.

CIDR (Classless Inter-Domain Routing) é a notação "IP/prefixo" (ex: 192.168.1.0/24), que abandona as classes fixas e permite máscaras de qualquer tamanho, otimizando o uso de endereços.

Cálculo básico de sub-rede com /24 (255.255.255.0):
- Endereço de rede: primeiro endereço da faixa (ex: 192.168.1.0)
- Endereço de broadcast: último endereço da faixa (ex: 192.168.1.255)
- Hosts utilizáveis: do primeiro ao penúltimo endereço (192.168.1.1 até 192.168.1.254) — total 254 hosts

Fórmula geral: número de hosts utilizáveis = 2^(bits de host) - 2 (subtrai-se o endereço de rede e o de broadcast).

Dica de prova: pratique identificar rede, broadcast e range de hosts a partir de um IP e uma máscara — é o tipo de questão mais cobrado em redes.`,
        checklist: ['Sei calcular sub-redes', 'Sei usar CIDR/VLSM', 'Pratiquei exercícios de IP'],
      },
      {
        id: 'm3a7',
        moduloId: 'm3',
        titulo: 'CIDR e VLSM',
        resumo: 'Cálculo de rede, broadcast e range de endereços.',
        conteudo: `VLSM (Variable Length Subnet Mask) é a técnica de usar máscaras de tamanho variável dentro da mesma rede, permitindo criar sub-redes de tamanhos diferentes conforme a necessidade real de cada uma (evitando desperdiçar endereços IP).

Passo a passo para calcular uma sub-rede a partir de um IP e uma máscara CIDR (ex: 192.168.10.77/26):

1. Descubra quantos bits de host restam: /26 significa 26 bits de rede, sobrando 32-26 = 6 bits de host
2. Calcule o "salto" entre sub-redes: 2^6 = 64, então as sub-redes começam em múltiplos de 64: 0, 64, 128, 192
3. Encontre em qual faixa o IP 192.168.10.77 se encaixa: está entre 64 e 127 (pois 77 está nesse intervalo)
4. Endereço de rede: 192.168.10.64
5. Endereço de broadcast: 192.168.10.127 (o último da faixa, antes do próximo múltiplo)
6. Hosts utilizáveis: de 192.168.10.65 até 192.168.10.126

Regra prática: some 2^(bits de host) para achar o tamanho de cada bloco de sub-rede, depois identifique em qual bloco o endereço dado se encaixa.

Dica de prova: pratique esse tipo de exercício repetidas vezes com máscaras diferentes (/25, /26, /27, /28) até o cálculo ficar automático — costuma ser uma das questões mais "matáveis" da prova se você dominar o método.`,
        checklist: ['Calculo endereço de rede', 'Calculo broadcast', 'Calculo range de hosts'],
      },
      {
        id: 'm3a8',
        moduloId: 'm3',
        titulo: 'IPv6',
        resumo: 'Estrutura do endereço IPv6, tipos e motivação.',
        conteudo: `IPv6 foi criado principalmente para resolver o esgotamento de endereços do IPv4 (que oferece "apenas" cerca de 4,3 bilhões de endereços, insuficientes para o crescimento da internet e dispositivos conectados).

Estrutura: o endereço IPv6 tem 128 bits (contra 32 bits do IPv4), escrito em 8 grupos de 4 dígitos hexadecimais, separados por dois-pontos.
Exemplo: 2001:0db8:0000:0000:0000:ff00:0042:8329

Regras de simplificação:
- Zeros à esquerda em cada grupo podem ser omitidos: 0db8 pode virar db8
- Uma sequência de grupos totalmente zerados pode ser substituída por "::" (apenas uma vez no endereço)
Exemplo simplificado: 2001:db8::ff00:42:8329

Tipos de endereços IPv6:
- Unicast — identifica uma única interface (comunicação um-para-um)
- Multicast — identifica um grupo de interfaces (comunicação um-para-muitos, entrega a todos do grupo)
- Anycast — identifica um grupo de interfaces, mas a entrega é feita apenas à interface mais próxima (não existia dessa forma no IPv4)

O IPv6 elimina a necessidade de NAT (usado no IPv4 para "esticar" endereços) e simplifica o cabeçalho para melhorar a eficiência do roteamento.

Dica de prova: memorize o tamanho (128 bits vs 32 bits do IPv4) e a motivação principal (esgotamento de endereços IPv4) — são os pontos mais cobrados.`,
        checklist: ['Conheço a estrutura do IPv6', 'Entendi a motivação do IPv6'],
      },
      {
        id: 'm3a9',
        moduloId: 'm3',
        titulo: 'TCP e UDP',
        resumo: 'Handshake de 3 vias, controle de fluxo, portas.',
        conteudo: `TCP (Transmission Control Protocol) e UDP (User Datagram Protocol) são os dois principais protocolos da camada de transporte.

TCP — orientado à conexão e confiável:
- Estabelece uma conexão antes de enviar dados, através do handshake de 3 vias (three-way handshake):
  1. Cliente envia SYN (sincronização) ao servidor
  2. Servidor responde com SYN-ACK (sincronização + confirmação)
  3. Cliente responde com ACK (confirmação), e a conexão está estabelecida
- Garante entrega confiável: confirma o recebimento de cada pacote (ACK) e reenvia o que se perde
- Faz controle de fluxo (evita que o emissor sobrecarregue o receptor) e controle de congestionamento
- Mais lento que o UDP devido a toda essa verificação, mas essencial quando a integridade dos dados importa (ex: transferência de arquivos, e-mail, navegação web)

UDP — sem conexão e não confiável:
- Não estabelece conexão prévia nem garante entrega, ordem ou ausência de duplicatas
- Muito mais rápido e com menos overhead que o TCP
- Usado onde velocidade importa mais que confiabilidade total: streaming de vídeo/áudio, jogos online, DNS

Portas: identificam qual aplicação/processo deve receber os dados em um mesmo endereço IP. Exemplos comuns: HTTP=80, HTTPS=443, FTP=20/21, SSH=22, DNS=53, SMTP=25.

Dica de prova: "TCP é confiável e mais lento (com handshake); UDP é rápido e sem garantias" é a distinção mais cobrada, muitas vezes associada a um cenário de uso (streaming = UDP, transferência de arquivo = TCP).`,
        checklist: ['Entendi o handshake TCP', 'Diferenciei TCP de UDP', 'Conheço portas comuns'],
      },
      {
        id: 'm3a10',
        moduloId: 'm3',
        titulo: 'Protocolos de aplicação',
        resumo: 'HTTP, HTTPS, DNS, DHCP, FTP, SMTP, SSH.',
        conteudo: `Protocolos da camada de aplicação, cada um com uma função específica:

- HTTP (HyperText Transfer Protocol) — protocolo usado para transferir páginas web (porta 80). Não criptografado.
- HTTPS — versão segura do HTTP, usando criptografia TLS/SSL (porta 443). Protege os dados contra interceptação.
- DNS (Domain Name System) — traduz nomes de domínio (ex: www.exemplo.com) em endereços IP (porta 53). É essencial para a navegação, já que humanos usam nomes e computadores usam IPs.
- DHCP (Dynamic Host Configuration Protocol) — atribui automaticamente endereços IP (e outras configurações de rede) aos dispositivos que entram na rede, evitando configuração manual.
- FTP (File Transfer Protocol) — usado para transferência de arquivos entre computadores (portas 20 e 21). Não criptografado por padrão.
- SMTP (Simple Mail Transfer Protocol) — usado para enviar e-mails (porta 25). O recebimento geralmente usa outros protocolos como POP3 (porta 110) ou IMAP (porta 143).
- SSH (Secure Shell) — permite acesso remoto seguro e criptografado a outro computador via linha de comando (porta 22), substituindo o antigo Telnet (que não é criptografado).

Dica de prova: monte uma tabela protocolo → porta → função e decore — é um dos assuntos mais garantidos da prova de redes.`,
        checklist: ['Conheço a função de cada protocolo', 'Sei as portas padrão'],
      },
      {
        id: 'm3a11',
        moduloId: 'm3',
        titulo: 'Hardware de rede',
        resumo: 'Switch, roteador, hub, gateway e bridge.',
        conteudo: `Principais equipamentos de rede:

- Hub — dispositivo mais simples e ultrapassado; recebe um sinal em uma porta e o retransmite para todas as outras portas, sem inteligência nenhuma. Trabalha na camada física. Gera muito tráfego desnecessário e colisões.
- Switch — trabalha na camada de enlace; aprende os endereços MAC conectados a cada porta e encaminha os quadros apenas para a porta correta, reduzindo colisões e melhorando o desempenho em comparação ao hub.
- Roteador (router) — trabalha na camada de rede; interconecta redes diferentes e decide o melhor caminho para encaminhar pacotes com base no endereço IP de destino. É o dispositivo que "liga" sua rede local à internet.
- Gateway — termo mais genérico para qualquer dispositivo que serve como "porta de entrada/saída" entre duas redes distintas (frequentemente o próprio roteador atua como gateway padrão de uma rede local).
- Bridge (ponte) — dispositivo de camada de enlace que interliga dois segmentos de rede, filtrando o tráfego com base no MAC, de forma similar a um switch simples (geralmente com menos portas).

Dica de prova: hierarquia de "inteligência": hub (nenhuma) < bridge/switch (MAC) < roteador (IP, decisão de caminho entre redes).`,
        checklist: ['Diferenciei switch de hub', 'Entendi o papel do roteador', 'Entendi gateway e bridge'],
      },
      {
        id: 'm3a12',
        moduloId: 'm3',
        titulo: 'Segurança de redes',
        resumo: 'Firewall, VPN, IDS/IPS, DMZ.',
        conteudo: `Mecanismos de proteção no nível de rede:

- Firewall — filtra o tráfego de rede com base em regras (endereço IP, porta, protocolo), bloqueando ou permitindo conexões. Pode ser de pacotes (mais simples, analisa cada pacote isoladamente), com estado/stateful (acompanha o contexto de uma conexão inteira) ou de aplicação (analisa o conteúdo em nível de aplicação, como um firewall web).

- VPN (Virtual Private Network) — cria um "túnel" criptografado sobre uma rede pública (como a internet), permitindo que o tráfego trafegue de forma segura e privada entre dois pontos, como se estivessem na mesma rede local.

- IDS (Intrusion Detection System) — monitora o tráfego da rede e detecta atividades suspeitas ou ataques, gerando alertas, mas sem bloquear ativamente.

- IPS (Intrusion Prevention System) — semelhante ao IDS, mas além de detectar, também age automaticamente para bloquear ou impedir o ataque em tempo real.

- DMZ (Demilitarized Zone / Zona Desmilitarizada) — sub-rede isolada, posicionada entre a rede interna (confiável) e a rede externa (internet, não confiável), onde ficam servidores que precisam ser acessados de fora (como servidores web), sem expor diretamente a rede interna.

Dica de prova: "IDS detecta e alerta; IPS detecta e bloqueia" é a distinção mais cobrada.`,
        checklist: ['Conheço tipos de firewall', 'Entendi VPN', 'Diferenciei IDS de IPS'],
      },
    ],
  },
  {
    id: 'm4',
    titulo: 'Módulo 4 — Algoritmos, Estrutura de Dados e Java',
    prioridade: 'maxima',
    aulas: [
      {
        id: 'm4a1',
        moduloId: 'm4',
        titulo: 'Conceito de algoritmo',
        resumo: 'Definição, características e representação de algoritmos.',
        conteudo: `Algoritmo é uma sequência finita e bem definida de passos para resolver um problema ou realizar uma tarefa. Características principais:

- Finitude — deve terminar após um número finito de passos
- Definição precisa — cada passo deve ser claro e não ambíguo
- Entrada — pode receber zero ou mais valores de entrada
- Saída — deve produzir pelo menos um resultado
- Efetividade — cada passo deve ser executável na prática

Formas de representar um algoritmo:
- Descrição narrativa — explicação em linguagem natural
- Pseudocódigo — uma mistura de linguagem natural e estrutura de programação, sem se prender à sintaxe de uma linguagem específica
- Fluxograma — representação gráfica usando símbolos padronizados (retângulos para processos, losangos para decisões, setas para fluxo)
- Código-fonte — implementação em uma linguagem de programação real (ex: Java)

Exemplo simples de algoritmo (pseudocódigo) para somar dois números:
INÍCIO
  LER a, b
  soma ← a + b
  ESCREVER soma
FIM

Dica de prova: bancas costumam apresentar um pseudocódigo ou fluxograma simples e pedir para "prever a saída" — pratique ler e simular esse tipo de código mentalmente.`,
        checklist: ['Entendi o conceito de algoritmo'],
      },
      {
        id: 'm4a2',
        moduloId: 'm4',
        titulo: 'Variáveis, constantes e tipos de dados',
        resumo: 'Operadores aritméticos e lógicos.',
        conteudo: `Variável é um espaço de memória nomeado que armazena um valor que pode mudar durante a execução do programa. Constante é semelhante, mas seu valor não pode ser alterado após definido.

Tipos de dados primitivos mais comuns:
- Inteiro (int) — números sem casas decimais
- Ponto flutuante (float/double) — números com casas decimais
- Caractere (char) — um único caractere
- Booleano (boolean) — verdadeiro ou falso
- String — sequência de caracteres (texto)

Operadores aritméticos: + (soma), - (subtração), * (multiplicação), / (divisão), % (módulo/resto da divisão)
Exemplo: 7 % 2 = 1 (resto da divisão de 7 por 2)

Operadores relacionais: == (igual), != (diferente), > (maior), < (menor), >= (maior ou igual), <= (menor ou igual) — retornam sempre um valor booleano

Operadores lógicos: && (E lógico), || (OU lógico), ! (negação) — combinam expressões booleanas
Exemplo: (idade >= 18) && (temDocumento == true) — só é verdadeiro se as duas condições forem verdadeiras

Dica de prova: cuidado para não confundir = (atribuição) com == (comparação de igualdade) — é um erro clássico de pegadinha em questões de código.`,
        checklist: ['Conheço tipos de dados', 'Conheço operadores'],
      },
      {
        id: 'm4a3',
        moduloId: 'm4',
        titulo: 'If, else e switch',
        resumo: 'Estruturas condicionais e fluxogramas.',
        conteudo: `Estruturas condicionais permitem que o programa tome decisões, executando diferentes blocos de código conforme uma condição.

if / else if / else:
if (condição) {
  // executa se a condição for verdadeira
} else if (outraCondição) {
  // executa se a primeira for falsa e essa for verdadeira
} else {
  // executa se nenhuma condição anterior for verdadeira
}

Exemplo: classificar uma nota
if (nota >= 7) {
  resultado = "Aprovado";
} else if (nota >= 5) {
  resultado = "Recuperação";
} else {
  resultado = "Reprovado";
}

switch: usado quando há muitas comparações de igualdade sobre a mesma variável, tornando o código mais legível que uma cadeia longa de if/else if.
switch (diaSemana) {
  case 1: nome = "Segunda"; break;
  case 2: nome = "Terça"; break;
  default: nome = "Inválido";
}
O "break" é importante para evitar que a execução "caia" para o próximo case (fall-through).

Dica de prova: pratique "ler" trechos de código com if/else e switch e prever a saída para diferentes valores de entrada — é o tipo de questão mais comum de algoritmos.`,
        checklist: ['Sei montar estruturas condicionais', 'Sei ler fluxogramas'],
      },
      {
        id: 'm4a4',
        moduloId: 'm4',
        titulo: 'For, while e do-while',
        resumo: 'Estruturas de repetição.',
        conteudo: `Estruturas de repetição (laços/loops) executam um bloco de código múltiplas vezes.

for — usado quando se sabe (ou pode calcular) o número de repetições antecipadamente:
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
Componentes: inicialização (i=0), condição de parada (i<5), incremento (i++). Imprime 0,1,2,3,4.

while — repete enquanto uma condição for verdadeira; a condição é testada ANTES de cada execução (pode nunca executar se a condição já for falsa de início):
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}

do-while — semelhante ao while, mas testa a condição DEPOIS de cada execução, garantindo que o bloco execute pelo menos uma vez:
int i = 0;
do {
  System.out.println(i);
  i++;
} while (i < 5);

Cuidado com laços infinitos: esquecer de atualizar a variável de controle (como o i++) faz a condição nunca se tornar falsa, travando o programa.

Dica de prova: a diferença "while testa antes, do-while testa depois (executa ao menos 1 vez)" é frequentemente cobrada com um trecho de código para você prever a saída.`,
        checklist: ['Sei usar for', 'Sei usar while/do-while', 'Pratiquei exercícios'],
      },
      {
        id: 'm4a5',
        moduloId: 'm4',
        titulo: 'Arrays',
        resumo: 'Vetores unidimensionais e bidimensionais.',
        conteudo: `Array (vetor) é uma estrutura que armazena múltiplos valores do mesmo tipo em posições contíguas de memória, acessadas por um índice numérico.

Array unidimensional (vetor simples):
int[] numeros = {10, 20, 30, 40};
System.out.println(numeros[0]); // imprime 10 (índice começa em 0!)
System.out.println(numeros.length); // imprime 4 (tamanho do array)

Percorrendo um array com for:
for (int i = 0; i < numeros.length; i++) {
  System.out.println(numeros[i]);
}

Array bidimensional (matriz) — representa uma tabela de linhas e colunas:
int[][] matriz = {{1,2,3}, {4,5,6}};
System.out.println(matriz[1][2]); // imprime 6 (linha 1, coluna 2)

Percorrendo uma matriz com dois for aninhados:
for (int i = 0; i < matriz.length; i++) {
  for (int j = 0; j < matriz[i].length; j++) {
    System.out.println(matriz[i][j]);
  }
}

Dica de prova: lembre-se sempre que os índices começam em 0, não em 1 — é a fonte de erro mais comum ao "ler" código com array em prova.`,
        checklist: ['Sei manipular arrays 1D', 'Sei manipular arrays 2D'],
      },
      {
        id: 'm4a6',
        moduloId: 'm4',
        titulo: 'Funções e procedimentos',
        resumo: 'Parâmetros, retorno e escopo.',
        conteudo: `Função (ou método, em Java) é um bloco de código reutilizável que executa uma tarefa específica e pode devolver um valor. Procedimento é semelhante, mas não retorna valor (em Java, isso é representado pelo tipo de retorno "void").

Estrutura básica de uma função em Java:
tipoRetorno nomeDaFuncao(tipoParametro parametro) {
  // código
  return valor;
}

Exemplo:
int somar(int a, int b) {
  return a + b;
}
// Uso: int resultado = somar(3, 4); // resultado = 7

Parâmetros são os valores que a função recebe para trabalhar; em Java, os parâmetros são passados por valor (uma cópia é enviada, alterações dentro da função não afetam a variável original, exceto quando o parâmetro é um objeto/array, onde a referência é copiada).

Escopo é a "área de visibilidade" de uma variável: variáveis declaradas dentro de uma função (locais) só existem e podem ser acessadas dentro dela; variáveis declaradas fora (globais/de classe) podem ser acessadas por múltiplos métodos.

Dica de prova: entenda que alterar um parâmetro simples (int, por exemplo) dentro de uma função NÃO altera a variável original fora dela — é um ponto clássico de pegadinha.`,
        checklist: ['Entendi passagem de parâmetros', 'Entendi escopo de variáveis'],
      },
      {
        id: 'm4a7',
        moduloId: 'm4',
        titulo: 'Pilha, fila, lista e árvore',
        resumo: 'Estruturas de dados fundamentais.',
        conteudo: `Pilha (Stack) — estrutura LIFO (Last In, First Out): o último elemento inserido é o primeiro a ser removido. Operações principais: push (inserir no topo) e pop (remover do topo). Exemplo de uso: histórico de navegação (botão "voltar"), pilha de chamadas de função.

Fila (Queue) — estrutura FIFO (First In, First Out): o primeiro elemento inserido é o primeiro a ser removido. Operações principais: enqueue (inserir no final) e dequeue (remover do início). Exemplo de uso: fila de impressão, fila de atendimento.

Lista ligada (Linked List) — sequência de elementos (nós) onde cada nó contém um valor e uma referência (ponteiro) para o próximo nó. Diferente do array, não ocupa posições contíguas de memória, o que facilita inserções/remoções no meio da lista, mas dificulta o acesso direto por índice.

Árvore binária — estrutura hierárquica onde cada nó tem no máximo dois filhos (esquerdo e direito). Muito usada para buscas eficientes (árvore binária de busca, onde valores menores ficam à esquerda e maiores à direita) e para representar hierarquias.

Dica de prova: associe pilha a "desfazer/refazer" e fila a "atendimento em ordem de chegada" — exemplos do cotidiano ajudam a fixar o conceito de LIFO vs FIFO.`,
        checklist: ['Entendi pilha (LIFO)', 'Entendi fila (FIFO)', 'Conheço listas e árvores'],
      },
      {
        id: 'm4a8',
        moduloId: 'm4',
        titulo: 'Recursão',
        resumo: 'Casos base, fatorial, Fibonacci, busca binária.',
        conteudo: `Recursão é quando uma função chama a si mesma para resolver um problema, dividindo-o em subproblemas menores e mais simples. Toda função recursiva precisa de:

1. Caso base — a condição que interrompe a recursão (sem ele, a função chamaria a si mesma infinitamente)
2. Caso recursivo — a chamada da função a si mesma com uma entrada "menor" ou "mais simples"

Exemplo clássico: fatorial
int fatorial(int n) {
  if (n <= 1) return 1;        // caso base
  return n * fatorial(n - 1);  // caso recursivo
}
fatorial(4) = 4 * fatorial(3) = 4 * 3 * fatorial(2) = 4 * 3 * 2 * fatorial(1) = 4*3*2*1 = 24

Exemplo: sequência de Fibonacci (cada número é a soma dos dois anteriores: 0,1,1,2,3,5,8...)
int fib(int n) {
  if (n <= 1) return n;         // caso base
  return fib(n-1) + fib(n-2);   // caso recursivo
}

Busca binária (recursiva ou iterativa) — busca eficiente em uma lista ORDENADA: compara o elemento do meio com o valor procurado; se for igual, encontrou; se for maior, busca na metade esquerda; se for menor, busca na metade direita. Reduz o espaço de busca pela metade a cada passo (complexidade O(log n)).

Dica de prova: pratique "traçar" a pilha de chamadas manualmente (desenhando cada chamada recursiva) para fatorial e Fibonacci com valores pequenos (n=3, n=4) — é o tipo de questão mais cobrada sobre recursão.`,
        checklist: ['Tracei pilha de chamadas', 'Pratiquei fatorial e Fibonacci'],
      },
      {
        id: 'm4a9',
        moduloId: 'm4',
        titulo: 'Java básico',
        resumo: 'JVM, JDK, JRE, sintaxe básica e tipos primitivos.',
        conteudo: `JVM (Java Virtual Machine) — máquina virtual que executa o bytecode Java, permitindo que o mesmo programa rode em qualquer sistema operacional que tenha uma JVM instalada ("escreva uma vez, rode em qualquer lugar").

JDK (Java Development Kit) — kit completo para desenvolvedores, inclui o compilador (javac), ferramentas de desenvolvimento e o JRE.

JRE (Java Runtime Environment) — ambiente necessário apenas para EXECUTAR programas Java já compilados (inclui a JVM e bibliotecas padrão, mas não o compilador).

Estrutura básica de um programa Java:
public class Principal {
  public static void main(String[] args) {
    System.out.println("Olá, mundo!");
  }
}

Tipos primitivos em Java: byte, short, int, long (inteiros de tamanhos diferentes), float, double (ponto flutuante), char (caractere), boolean (verdadeiro/falso).

Compilação e execução: o código-fonte (.java) é compilado pelo javac em bytecode (.class), que é então executado pela JVM através do comando java.

Dica de prova: memorize a relação JDK ⊃ JRE ⊃ JVM (o JDK contém o JRE, que contém a JVM) — é frequentemente cobrada.`,
        checklist: ['Conheço JVM/JDK/JRE', 'Escrevi meu primeiro programa'],
      },
      {
        id: 'm4a10',
        moduloId: 'm4',
        titulo: 'Classes e objetos',
        resumo: 'Atributos, métodos e construtores.',
        conteudo: `Classe é o "molde" ou "planta" que define atributos (características) e métodos (comportamentos) que os objetos criados a partir dela terão. Objeto é uma instância concreta de uma classe.

Exemplo:
class Carro {
  String cor;      // atributo
  int velocidade;  // atributo

  Carro(String cor) {  // construtor
    this.cor = cor;
    this.velocidade = 0;
  }

  void acelerar() {    // método
    velocidade += 10;
  }
}

// Criando objetos (instâncias):
Carro meuCarro = new Carro("vermelho");
meuCarro.acelerar();

Construtor é um método especial, com o mesmo nome da classe, executado automaticamente ao criar um objeto com "new". Serve para inicializar os atributos do objeto. Uma classe pode ter múltiplos construtores (sobrecarga), desde que com parâmetros diferentes.

A palavra-chave "this" se refere ao próprio objeto atual, usada geralmente para diferenciar o atributo da classe de um parâmetro com o mesmo nome.

Dica de prova: entenda que "new NomeDaClasse(...)" sempre chama um construtor e cria um novo objeto na memória — é a base de toda questão envolvendo criação de objetos.`,
        checklist: ['Criei classes simples', 'Entendi construtores'],
      },
      {
        id: 'm4a11',
        moduloId: 'm4',
        titulo: 'Encapsulamento, herança e polimorfismo',
        resumo: 'Pilares da Orientação a Objetos, interfaces e classes abstratas.',
        conteudo: `Os quatro pilares da Orientação a Objetos:

Encapsulamento — esconder os detalhes internos de uma classe, expondo apenas o necessário através de métodos públicos (getters/setters), protegendo os atributos com modificadores como "private".

Herança — permite que uma classe (subclasse/filha) herde atributos e métodos de outra (superclasse/pai), usando a palavra-chave "extends", promovendo reuso de código.
class Animal { void emitirSom() { ... } }
class Cachorro extends Animal { } // herda emitirSom()
A superclasse pode ser acessada com "super" (ex: super.metodo() chama o método da classe pai).

Polimorfismo — permite que objetos de classes diferentes sejam tratados de forma uniforme através de uma superclasse ou interface comum, mas cada um executando seu próprio comportamento específico (sobrescrita/override).
class Gato extends Animal { void emitirSom() { System.out.println("Miau"); } }
Animal a = new Gato();
a.emitirSom(); // imprime "Miau" — decidido em tempo de execução

Abstração — foco nas características essenciais de um objeto, ignorando detalhes irrelevantes ao contexto. Implementada através de classes abstratas (não podem ser instanciadas diretamente, podem ter métodos sem implementação) e interfaces (contratos que definem métodos que uma classe deve implementar, sem indicar como).

Dica de prova: "sobrecarga" (overload: mesmo nome, parâmetros diferentes) é diferente de "sobrescrita" (override: mesmo nome e parâmetros, reimplementado na subclasse) — pegadinha muito comum.`,
        checklist: ['Entendi encapsulamento', 'Entendi herança', 'Entendi polimorfismo'],
      },
      {
        id: 'm4a12',
        moduloId: 'm4',
        titulo: 'Coleções Java',
        resumo: 'ArrayList, HashMap, HashSet.',
        conteudo: `O Java Collections Framework oferece estruturas prontas para armazenar e manipular grupos de objetos.

ArrayList — lista dinâmica (cresce e diminui automaticamente, ao contrário de um array comum de tamanho fixo), mantém a ordem de inserção e permite elementos duplicados.
ArrayList<String> nomes = new ArrayList<>();
nomes.add("Ana");
nomes.add("Bruno");
nomes.get(0); // "Ana"
nomes.remove("Bruno");

HashMap — armazena pares chave-valor, sem garantia de ordem, não permite chaves duplicadas (uma nova inserção com a mesma chave substitui o valor anterior).
HashMap<String, Integer> idades = new HashMap<>();
idades.put("Ana", 25);
idades.get("Ana"); // 25

HashSet — armazena um conjunto de elementos únicos (sem duplicatas), sem garantia de ordem. Útil quando você só precisa saber se um elemento existe, sem se importar com a posição.
HashSet<String> cores = new HashSet<>();
cores.add("azul");
cores.add("azul"); // ignorado, já existe
cores.contains("azul"); // true

Dica de prova: memorize as diferenças-chave: ArrayList (ordenado, permite duplicatas), HashSet (sem duplicatas, sem ordem), HashMap (chave-valor, chaves únicas).`,
        checklist: ['Pratiquei ArrayList', 'Pratiquei HashMap/HashSet'],
      },
      {
        id: 'm4a13',
        moduloId: 'm4',
        titulo: 'Exceções',
        resumo: 'try/catch/finally, throws, tipos de exceções.',
        conteudo: `Exceções são eventos que interrompem o fluxo normal de execução de um programa (erros em tempo de execução, como divisão por zero ou acesso a um índice inválido de array).

Tratamento com try/catch/finally:
try {
  int resultado = 10 / 0; // gera ArithmeticException
} catch (ArithmeticException e) {
  System.out.println("Erro: divisão por zero");
} finally {
  System.out.println("Este bloco sempre executa, com ou sem erro");
}

- try — bloco onde o código que pode gerar erro é colocado
- catch — captura e trata um tipo específico de exceção
- finally — bloco que sempre executa, tenha ocorrido exceção ou não (útil para liberar recursos, como fechar arquivos)

Checked exceptions (verificadas) — precisam ser tratadas obrigatoriamente (com try/catch) ou declaradas com "throws" na assinatura do método (ex: IOException).
Unchecked exceptions (não verificadas) — não exigem tratamento obrigatório, geralmente indicam erros de programação (ex: NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException).

"throw" lança uma exceção manualmente; "throws" declara que um método PODE lançar determinada exceção.

Dica de prova: memorize exemplos de exceções comuns (NullPointerException = acessar algo nulo, ArrayIndexOutOfBoundsException = índice inválido) — é comum a prova pedir qual exceção seria gerada por um trecho de código.`,
        checklist: ['Sei tratar exceções', 'Diferenciei checked de unchecked'],
      },
      {
        id: 'm4a14',
        moduloId: 'm4',
        titulo: 'Strings',
        resumo: 'length, substring, indexOf, equals, split.',
        conteudo: `String em Java representa uma sequência de caracteres (texto), e é um dos tipos mais usados. Principais métodos:

- length() — retorna o número de caracteres: "banana".length() → 6
- charAt(i) — retorna o caractere na posição i: "banana".charAt(0) → 'b'
- substring(inicio, fim) — extrai uma parte do texto: "banana".substring(1,3) → "an" (do índice 1 até o 3, exclusive)
- indexOf("x") — retorna a posição da primeira ocorrência de "x", ou -1 se não encontrar: "banana".indexOf("n") → 2
- equals("x") — compara o CONTEÚDO de duas strings (use sempre equals, nunca == para comparar conteúdo de strings em Java!): "abc".equals("abc") → true
- split("separador") — divide a string em um array, usando o separador indicado: "a,b,c".split(",") → ["a","b","c"]
- trim() — remove espaços em branco do início e fim
- replace("x","y") — substitui todas ocorrências de "x" por "y"
- toUpperCase() / toLowerCase() — converte para maiúsculas/minúsculas

Atenção: strings em Java são imutáveis — qualquer método que "modifica" uma string na verdade cria uma nova string; o valor original nunca é alterado.

Dica de prova: o erro "usar == em vez de equals() para comparar strings" é uma das pegadinhas mais clássicas em questões de Java — grave isso.`,
        checklist: ['Pratiquei métodos de String'],
      },
      {
        id: 'm4a15',
        moduloId: 'm4',
        titulo: 'Threads',
        resumo: 'Multithreading em Java: Thread, Runnable, sincronização.',
        conteudo: `Multithreading permite que um programa execute múltiplas tarefas de forma concorrente (ou paralela, se houver múltiplos núcleos), dentro do mesmo processo.

Duas formas principais de criar uma thread em Java:

1. Estendendo a classe Thread:
class MinhaThread extends Thread {
  public void run() {
    System.out.println("Executando...");
  }
}
MinhaThread t = new MinhaThread();
t.start(); // inicia a thread (nunca chame run() diretamente para isso)

2. Implementando a interface Runnable (abordagem mais flexível, pois Java não permite herança múltipla):
class MinhaTarefa implements Runnable {
  public void run() {
    System.out.println("Executando...");
  }
}
Thread t = new Thread(new MinhaTarefa());
t.start();

Sincronização: quando múltiplas threads acessam o mesmo recurso compartilhado (uma variável, por exemplo), pode ocorrer condição de corrida (race condition) — resultados incorretos ou imprevisíveis por causa da ordem de execução concorrente. A palavra-chave "synchronized" garante que apenas uma thread por vez execute um bloco de código crítico:
synchronized void metodoCritico() {
  // apenas uma thread por vez executa isso
}

Dica de prova: entenda que start() efetivamente cria uma nova linha de execução (chamando run() internamente em paralelo), enquanto chamar run() diretamente apenas executa como método comum, sem criar uma nova thread.`,
        checklist: ['Entendi Thread e Runnable', 'Entendi sincronização básica'],
      },
    ],
  },
  {
    id: 'm5',
    titulo: 'Módulo 5 — Banco de Dados',
    aulas: [
      {
        id: 'm5a1',
        moduloId: 'm5',
        titulo: 'Conceitos de banco de dados',
        resumo: 'Dado, informação, SGBD, esquema e instância.',
        conteudo: `Dado é um valor bruto, sem contexto (ex: "25"). Informação é o dado processado e contextualizado, que faz sentido para quem recebe (ex: "a idade do cliente é 25 anos").

Banco de dados é um conjunto organizado de dados relacionados, armazenados de forma estruturada para facilitar acesso, gerenciamento e atualização.

SGBD (Sistema Gerenciador de Banco de Dados) é o software que permite criar, manipular e administrar bancos de dados (exemplos: MySQL, PostgreSQL, Oracle, SQL Server). Ele oferece uma camada entre o usuário/aplicação e os dados fisicamente armazenados, cuidando de segurança, integridade, concorrência e desempenho.

Esquema (schema) é a estrutura lógica do banco de dados: quais tabelas existem, quais colunas cada uma tem, tipos de dados, relacionamentos — é a "planta" do banco, definida na criação e que muda raramente.

Instância é o conteúdo real armazenado no banco em um dado momento — os dados propriamente ditos, que mudam constantemente conforme o uso.

Usuários de um SGBD podem ter papéis diferentes: administrador (DBA, gerencia toda a estrutura e segurança), desenvolvedor (cria e manipula esquemas) e usuário final (consulta e insere dados através de aplicações).

Dica de prova: "esquema muda pouco (estrutura), instância muda sempre (dados do momento)" é a distinção mais cobrada nesse tópico.`,
        checklist: ['Conheço os conceitos básicos de BD'],
      },
      {
        id: 'm5a2',
        moduloId: 'm5',
        titulo: 'Modelo relacional',
        resumo: 'Tabelas, tuplas, atributos e domínios.',
        conteudo: `O modelo relacional organiza os dados em tabelas (também chamadas relações), sendo o modelo mais usado em bancos de dados atuais (bancos "SQL").

- Tabela (relação) — conjunto de dados organizados em linhas e colunas, representando um tipo de entidade (ex: tabela "Clientes")
- Tupla (linha/registro) — cada linha da tabela representa uma ocorrência específica da entidade (ex: um cliente específico)
- Atributo (coluna/campo) — cada coluna representa uma característica da entidade (ex: nome, e-mail, telefone)
- Domínio — o conjunto de valores válidos que um atributo pode assumir (ex: o domínio do atributo "idade" são os números inteiros positivos; o domínio de "sexo" pode ser limitado a valores específicos)

Exemplo de tabela Clientes:
| id | nome  | idade |
|----|-------|-------|
| 1  | Ana   | 25    |
| 2  | Bruno | 30    |

Aqui, cada linha (1,Ana,25) é uma tupla; "nome" e "idade" são atributos; o domínio de "idade" seria os números inteiros positivos.

Dica de prova: memorize a correspondência tabela=relação, linha=tupla, coluna=atributo — os termos são usados de forma intercambiável em provas.`,
        checklist: ['Entendi o modelo relacional'],
      },
      {
        id: 'm5a3',
        moduloId: 'm5',
        titulo: 'Chaves primárias e estrangeiras',
        resumo: 'PK, FK, chave candidata e super-chave.',
        conteudo: `Chaves são atributos (ou conjuntos de atributos) usados para identificar e relacionar registros em um banco de dados relacional.

- Super-chave — qualquer conjunto de atributos que identifica unicamente uma tupla (pode conter atributos redundantes/desnecessários)
- Chave candidata — uma super-chave "mínima", ou seja, sem atributos redundantes: se remover qualquer atributo dela, ela deixa de identificar unicamente a tupla
- Chave primária (Primary Key / PK) — a chave candidata escolhida para ser o identificador oficial da tabela. Não pode ser nula e deve ser única para cada linha
- Chave estrangeira (Foreign Key / FK) — um atributo (ou conjunto) em uma tabela que referencia a chave primária de outra tabela, criando um relacionamento entre elas e garantindo integridade referencial

Exemplo:
Tabela Clientes: id (PK), nome
Tabela Pedidos: id (PK), cliente_id (FK que referencia Clientes.id), valor

A FK garante que todo "cliente_id" em Pedidos exista de fato na tabela Clientes — isso é chamado de integridade referencial. Se você tentar inserir um pedido com um cliente_id que não existe, o SGBD recusa a operação (ou você precisa desabilitar essa checagem).

Dica de prova: "chave primária identifica a própria tabela; chave estrangeira aponta para a chave primária de OUTRA tabela" é a distinção mais cobrada.`,
        checklist: ['Diferenciei PK de FK', 'Conheço chave candidata'],
      },
      {
        id: 'm5a4',
        moduloId: 'm5',
        titulo: 'SQL DDL',
        resumo: 'CREATE, ALTER, DROP.',
        conteudo: `DDL (Data Definition Language) é o subconjunto do SQL usado para definir e modificar a ESTRUTURA do banco de dados (tabelas, índices, visões) — não lida com os dados em si, mas com o "esqueleto".

CREATE — cria uma nova estrutura:
CREATE TABLE Clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  idade INT
);

ALTER — modifica uma estrutura já existente:
ALTER TABLE Clientes ADD COLUMN email VARCHAR(100); -- adiciona uma coluna
ALTER TABLE Clientes DROP COLUMN idade;              -- remove uma coluna
ALTER TABLE Clientes MODIFY COLUMN nome VARCHAR(150); -- altera o tipo de uma coluna

DROP — remove completamente uma estrutura (tabela inteira, índice, banco de dados):
DROP TABLE Clientes; -- apaga a tabela e todos os seus dados, sem volta

Tipos de dados comuns em SQL: INT (inteiro), VARCHAR(n) (texto de tamanho variável até n caracteres), DATE (data), BOOLEAN (verdadeiro/falso), DECIMAL (números com casas decimais precisas).

Dica de prova: DROP apaga a estrutura inteira (irreversível); DELETE (DML) apaga apenas os dados, mantendo a estrutura da tabela — não confunda os dois em prova.`,
        checklist: ['Pratiquei CREATE TABLE', 'Pratiquei ALTER e DROP'],
      },
      {
        id: 'm5a5',
        moduloId: 'm5',
        titulo: 'SQL DML',
        resumo: 'INSERT, UPDATE, DELETE.',
        conteudo: `DML (Data Manipulation Language) é o subconjunto do SQL usado para manipular os DADOS dentro das tabelas (diferente do DDL, que lida com a estrutura).

INSERT — adiciona novos registros (linhas) a uma tabela:
INSERT INTO Clientes (id, nome, idade) VALUES (1, 'Ana', 25);

UPDATE — modifica registros já existentes:
UPDATE Clientes SET idade = 26 WHERE id = 1;
Atenção: sem a cláusula WHERE, o UPDATE altera TODAS as linhas da tabela — cuidado extremo com isso na prática.

DELETE — remove registros existentes:
DELETE FROM Clientes WHERE id = 1;
Assim como o UPDATE, sem WHERE o DELETE remove TODAS as linhas da tabela (mas mantém a estrutura, diferente do DROP TABLE).

Boas práticas: sempre usar WHERE em UPDATE/DELETE para atingir apenas os registros desejados, e testar antes com um SELECT usando a mesma condição do WHERE, para conferir quais linhas seriam afetadas.

Dica de prova: memorize que DML afeta dados (INSERT/UPDATE/DELETE) enquanto DDL afeta estrutura (CREATE/ALTER/DROP) — é uma classificação frequentemente cobrada diretamente.`,
        checklist: ['Pratiquei INSERT/UPDATE/DELETE'],
      },
      {
        id: 'm5a6',
        moduloId: 'm5',
        titulo: 'SELECT, WHERE e ORDER BY',
        resumo: 'Consultas básicas.',
        conteudo: `SELECT é o comando mais usado em SQL, parte do DQL (Data Query Language), usado para consultar dados.

Sintaxe básica:
SELECT coluna1, coluna2 FROM tabela;
SELECT * FROM Clientes; -- o asterisco seleciona TODAS as colunas

WHERE — filtra as linhas retornadas, com base em uma condição:
SELECT * FROM Clientes WHERE idade >= 18;
SELECT * FROM Clientes WHERE nome = 'Ana' AND idade > 20;
SELECT * FROM Clientes WHERE nome LIKE 'A%'; -- nomes que começam com "A" (LIKE com wildcard %)

ORDER BY — ordena o resultado por uma ou mais colunas:
SELECT * FROM Clientes ORDER BY idade; -- ordem crescente (padrão, ASC)
SELECT * FROM Clientes ORDER BY idade DESC; -- ordem decrescente
SELECT * FROM Clientes ORDER BY nome ASC, idade DESC; -- múltiplos critérios

Operadores úteis no WHERE: =, !=, >, <, >=, <=, BETWEEN (intervalo), IN (lista de valores), LIKE (padrão de texto), IS NULL (verifica valor nulo).

Dica de prova: pratique escrever consultas do zero combinando WHERE e ORDER BY — é a base para entender JOINs e GROUP BY, que são mais cobrados ainda.`,
        checklist: ['Pratiquei SELECT com WHERE', 'Pratiquei ORDER BY'],
      },
      {
        id: 'm5a7',
        moduloId: 'm5',
        titulo: 'GROUP BY e HAVING',
        resumo: 'Funções de agregação: COUNT, SUM, AVG, MIN, MAX.',
        conteudo: `Funções de agregação realizam cálculos sobre um conjunto de linhas, retornando um único valor resumido:

- COUNT(*) — conta o número de linhas
- SUM(coluna) — soma os valores de uma coluna numérica
- AVG(coluna) — calcula a média
- MIN(coluna) — retorna o menor valor
- MAX(coluna) — retorna o maior valor

Exemplo simples:
SELECT COUNT(*) FROM Clientes; -- total de clientes
SELECT AVG(idade) FROM Clientes; -- idade média

GROUP BY — agrupa linhas que têm o mesmo valor em uma coluna, permitindo aplicar funções de agregação para CADA grupo separadamente:
SELECT cidade, COUNT(*) FROM Clientes GROUP BY cidade;
-- retorna quantos clientes existem em cada cidade

HAVING — filtra os GRUPOS resultantes do GROUP BY (diferente do WHERE, que filtra linhas individuais ANTES do agrupamento):
SELECT cidade, COUNT(*) as total FROM Clientes GROUP BY cidade HAVING COUNT(*) > 10;
-- mostra apenas cidades com mais de 10 clientes

Ordem de execução lógica: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY

Dica de prova: "WHERE filtra antes de agrupar (linhas), HAVING filtra depois de agrupar (grupos)" é a pegadinha mais comum sobre esse tópico — memorize essa diferença.`,
        checklist: ['Pratiquei GROUP BY', 'Pratiquei HAVING'],
      },
      {
        id: 'm5a8',
        moduloId: 'm5',
        titulo: 'JOINs',
        resumo: 'INNER, LEFT, RIGHT, FULL OUTER JOIN.',
        conteudo: `JOIN combina linhas de duas ou mais tabelas com base em uma condição de relacionamento (geralmente entre chave primária e chave estrangeira).

Considere: Clientes (id, nome) e Pedidos (id, cliente_id, valor)

INNER JOIN — retorna apenas as linhas que têm correspondência em AMBAS as tabelas:
SELECT Clientes.nome, Pedidos.valor
FROM Clientes
INNER JOIN Pedidos ON Clientes.id = Pedidos.cliente_id;
-- só aparecem clientes que têm ao menos um pedido

LEFT JOIN (ou LEFT OUTER JOIN) — retorna TODAS as linhas da tabela da esquerda (Clientes), e as correspondentes da direita (Pedidos); se não houver correspondência, os campos da direita vêm como NULL:
SELECT Clientes.nome, Pedidos.valor
FROM Clientes
LEFT JOIN Pedidos ON Clientes.id = Pedidos.cliente_id;
-- aparecem TODOS os clientes, mesmo os que nunca fizeram pedido (valor = NULL)

RIGHT JOIN (ou RIGHT OUTER JOIN) — o oposto do LEFT JOIN: retorna todas as linhas da tabela da direita, e as correspondentes da esquerda (se houver).

FULL OUTER JOIN — combina o LEFT e o RIGHT: retorna todas as linhas de ambas as tabelas, preenchendo com NULL onde não há correspondência (nem todos os SGBDs suportam nativamente, como o MySQL, que exige um workaround com UNION).

Dica de prova: pense visualmente em diagramas de Venn — INNER é a interseção; LEFT é "tudo da esquerda + interseção"; FULL é "tudo dos dois lados".`,
        checklist: ['Pratiquei INNER JOIN', 'Pratiquei LEFT/RIGHT JOIN'],
      },
      {
        id: 'm5a9',
        moduloId: 'm5',
        titulo: 'Subconsultas',
        resumo: 'Correlacionadas e não correlacionadas, EXISTS, IN, ANY, ALL.',
        conteudo: `Subconsulta (subquery) é uma consulta SELECT dentro de outra consulta, usada para calcular um valor ou conjunto de valores intermediário.

Subconsulta não correlacionada — pode ser executada de forma independente da consulta externa:
SELECT nome FROM Clientes
WHERE id IN (SELECT cliente_id FROM Pedidos WHERE valor > 1000);
-- busca clientes que têm pelo menos um pedido com valor acima de 1000

Subconsulta correlacionada — depende de valores da consulta externa, sendo executada uma vez para cada linha da consulta principal (geralmente mais lenta):
SELECT nome FROM Clientes c
WHERE EXISTS (SELECT 1 FROM Pedidos p WHERE p.cliente_id = c.id);
-- para cada cliente, verifica se existe algum pedido associado a ele

Operadores usados com subconsultas:
- IN — verifica se um valor está dentro do conjunto retornado pela subconsulta
- EXISTS — verifica apenas se a subconsulta retorna alguma linha (mais eficiente que IN em muitos casos, pois não precisa trazer todos os valores)
- ANY (ou SOME) — a condição é verdadeira se for satisfeita por PELO MENOS UM valor retornado pela subconsulta
- ALL — a condição precisa ser verdadeira para TODOS os valores retornados pela subconsulta

Exemplo com ALL: SELECT nome FROM Clientes WHERE idade > ALL (SELECT idade FROM Clientes WHERE cidade = 'SP');
-- clientes com idade maior que a idade de TODOS os clientes de SP

Dica de prova: "EXISTS só verifica se existe alguma linha (mais rápido); IN compara com uma lista de valores" é uma distinção comum em prova.`,
        checklist: ['Pratiquei subconsultas simples', 'Pratiquei subconsultas correlacionadas'],
      },
      {
        id: 'm5a10',
        moduloId: 'm5',
        titulo: 'Normalização',
        resumo: '1FN, 2FN, 3FN, BCNF e dependências funcionais.',
        conteudo: `Normalização é o processo de organizar as tabelas de um banco de dados para reduzir redundância e evitar anomalias de inserção, atualização e exclusão.

Dependência funcional: um atributo B depende funcionalmente de A se, para cada valor de A, existe exatamente um valor de B associado (A determina B).

1FN (Primeira Forma Normal) — cada coluna deve conter apenas valores atômicos (indivisíveis), sem grupos repetidos ou múltiplos valores em uma mesma célula.
Errado: uma coluna "telefones" com "1111-1111, 2222-2222" na mesma célula
Certo: uma tabela separada de telefones, um por linha

2FN (Segunda Forma Normal) — deve estar na 1FN, e todo atributo não-chave deve depender da CHAVE PRIMÁRIA COMPLETA (não apenas de parte dela, no caso de chaves compostas). Elimina dependências parciais.

3FN (Terceira Forma Normal) — deve estar na 2FN, e não pode haver dependência transitiva: um atributo não-chave não pode depender de outro atributo não-chave (só pode depender diretamente da chave primária).
Exemplo de violação: numa tabela Pedidos com cliente_id, cidade_cliente — "cidade_cliente" depende de "cliente_id", que não é a chave primária da tabela Pedidos. O certo é mover "cidade" para a tabela Clientes.

BCNF (Forma Normal de Boyce-Codd) — versão mais rigorosa da 3FN: para toda dependência funcional X→Y, X deve ser uma super-chave.

Dica de prova: memorize a "escada": 1FN elimina valores não atômicos; 2FN elimina dependência parcial da chave; 3FN elimina dependência transitiva entre não-chaves.`,
        checklist: ['Entendi 1FN, 2FN, 3FN', 'Entendi BCNF'],
      },
      {
        id: 'm5a11',
        moduloId: 'm5',
        titulo: 'Transações ACID',
        resumo: 'Atomicidade, consistência, isolamento, durabilidade.',
        conteudo: `Transação é uma sequência de operações no banco de dados que deve ser executada como uma unidade indivisível: ou tudo é aplicado, ou nada é aplicado. As propriedades ACID garantem a confiabilidade das transações:

- Atomicidade (Atomicity) — a transação é "tudo ou nada": se qualquer parte falhar, toda a transação é desfeita (rollback), como se nunca tivesse acontecido.
- Consistência (Consistency) — a transação leva o banco de dados de um estado válido para outro estado válido, respeitando todas as regras de integridade.
- Isolamento (Isolation) — transações concorrentes (executando ao mesmo tempo) não devem interferir umas nas outras; o resultado deve ser equivalente a executá-las uma de cada vez, em sequência.
- Durabilidade (Durability) — uma vez confirmada (commit), a transação persiste no banco mesmo diante de falhas do sistema (queda de energia, por exemplo).

Comandos de controle de transação:
- BEGIN / START TRANSACTION — inicia uma transação
- COMMIT — confirma e torna permanentes as alterações feitas
- ROLLBACK — desfaz todas as alterações feitas desde o início da transação
- SAVEPOINT — cria um "ponto de retorno" intermediário dentro da transação, permitindo desfazer apenas até aquele ponto, sem cancelar tudo

Controle de concorrência lida com o acesso simultâneo de múltiplas transações aos mesmos dados, usando técnicas como bloqueios (locks) para evitar problemas como leitura suja (dirty read) ou perda de atualização.

Dica de prova: decore o acrônimo ACID e o significado de cada letra — é praticamente garantido cair uma questão pedindo para associar cada propriedade à sua definição.`,
        checklist: ['Decorei o acrônimo ACID', 'Entendi controle de concorrência'],
      },
      {
        id: 'm5a12',
        moduloId: 'm5',
        titulo: 'Segurança em banco de dados',
        resumo: 'GRANT, REVOKE, roles, BD distribuídos.',
        conteudo: `Segurança em banco de dados envolve controlar quem pode acessar e o que cada usuário pode fazer com os dados.

GRANT — concede privilégios a um usuário ou role (papel):
GRANT SELECT, INSERT ON Clientes TO usuario1;
-- permite que usuario1 consulte e insira dados na tabela Clientes

REVOKE — remove privilégios previamente concedidos:
REVOKE INSERT ON Clientes FROM usuario1;
-- usuario1 perde a permissão de inserir, mas mantém a de consultar

Roles (papéis/perfis) — agrupam um conjunto de privilégios que podem ser atribuídos a múltiplos usuários de uma vez, facilitando a administração (ex: criar um role "leitor" com apenas permissão de SELECT, e atribuí-lo a vários usuários).

Views (visões) de segurança — uma "tabela virtual" criada a partir de uma consulta, que pode expor apenas algumas colunas ou linhas de uma tabela real, escondendo dados sensíveis dos usuários que só têm acesso à view.

Bancos de dados distribuídos — os dados são armazenados em múltiplos servidores/localizações, mas o sistema se comporta como um único banco lógico para o usuário. Conceitos relacionados:
- Replicação — manter cópias dos mesmos dados em servidores diferentes, aumentando disponibilidade e desempenho de leitura
- Particionamento (sharding) — dividir os dados entre servidores diferentes (cada um armazena uma parte), permitindo escalar o armazenamento e o processamento

Dica de prova: GRANT concede, REVOKE remove — é a distinção mais básica e cobrada; também vale saber que views podem ser usadas como camada de segurança.`,
        checklist: ['Entendi GRANT/REVOKE', 'Conheço BD distribuídos'],
      },
    ],
  },
  {
    id: 'm6',
    titulo: 'Módulo 6 — Segurança da Informação',
    aulas: [
      {
        id: 'm6a1',
        moduloId: 'm6',
        titulo: 'Confidencialidade, integridade e disponibilidade',
        resumo: 'Princípios CID (CIA).',
        conteudo: `Os três pilares fundamentais da segurança da informação, conhecidos pela sigla CID (em inglês, CIA):

- Confidencialidade — garantir que a informação só seja acessada por pessoas autorizadas. Violação: um vazamento de dados, um hacker acessando informações que não deveria.
- Integridade — garantir que a informação não seja alterada de forma indevida ou não autorizada, mantendo-se completa e correta. Violação: alguém modifica um valor em uma transação bancária sem autorização.
- Disponibilidade — garantir que a informação e os sistemas estejam acessíveis para os usuários autorizados sempre que necessário. Violação: um ataque de negação de serviço (DDoS) que tira um site do ar.

Outros conceitos relacionados, às vezes citados como extensões do CID:
- Autenticidade — garantir que a origem da informação é genuína (a pessoa/sistema é realmente quem diz ser)
- Não-repúdio (irretratabilidade) — garantir que o autor de uma ação não possa negar tê-la realizado (muito usado com assinatura digital)

Dica de prova: para cada questão sobre um incidente de segurança, pergunte-se "qual pilar do CID foi violado?" — é o raciocínio mais usado para resolver questões desse tópico.`,
        checklist: ['Decorei os 3 princípios CID'],
      },
      {
        id: 'm6a2',
        moduloId: 'm6',
        titulo: 'Ameaças e vulnerabilidades',
        resumo: 'Conceitos gerais de risco.',
        conteudo: `Vulnerabilidade é uma fraqueza ou falha em um sistema, processo ou pessoa que PODE ser explorada (ex: um software desatualizado, uma senha fraca, um funcionário sem treinamento de segurança).

Ameaça é qualquer coisa que PODE explorar uma vulnerabilidade para causar dano (ex: um hacker, um vírus, um desastre natural, um funcionário mal-intencionado).

Risco é a combinação da probabilidade de uma ameaça explorar uma vulnerabilidade com o impacto que isso causaria — é o que as organizações tentam medir e reduzir através da gestão de segurança.

Relação: Risco = Ameaça × Vulnerabilidade × Impacto (de forma conceitual, não uma fórmula matemática exata)

Exemplo prático: um servidor com um software desatualizado (vulnerabilidade) pode ser atacado por um hacker (ameaça), resultando em vazamento de dados (impacto).

Medidas de tratamento de risco: aceitar (conviver com o risco, se baixo), mitigar (reduzir a probabilidade ou impacto, ex: aplicando patches), transferir (ex: contratar um seguro) ou evitar (eliminar a atividade que gera o risco).

Dica de prova: "vulnerabilidade é a fraqueza; ameaça é quem/o que explora essa fraqueza" — memorize essa distinção, é a base para entender todo o restante do módulo de segurança.`,
        checklist: ['Diferenciei ameaça de vulnerabilidade'],
      },
      {
        id: 'm6a3',
        moduloId: 'm6',
        titulo: 'Phishing e engenharia social',
        resumo: 'Golpes na internet.',
        conteudo: `Engenharia social é a técnica de manipular pessoas psicologicamente para que revelem informações confidenciais ou realizem ações que comprometam a segurança, explorando confiança, medo, urgência ou curiosidade — em vez de explorar falhas técnicas.

Phishing é o tipo mais comum de golpe de engenharia social: o atacante se passa por uma entidade confiável (banco, empresa, órgão público) para induzir a vítima a fornecer dados sensíveis (senhas, números de cartão) ou clicar em links maliciosos, geralmente por e-mail ou mensagem.

Variações de phishing:
- Spear phishing — ataque direcionado a uma pessoa ou organização específica, com informações personalizadas para parecer mais convincente
- Whaling — spear phishing direcionado a executivos de alto escalão ("peixes grandes")
- Smishing — phishing feito por SMS
- Vishing — phishing feito por chamada de voz (telefone)
- Pharming — redireciona o usuário para um site falso mesmo que ele digite o endereço correto, geralmente manipulando o DNS

Outras técnicas de engenharia social: pretexting (criar uma história falsa/pretexto para obter informação), baiting (oferecer algo atrativo, como um pendrive "esquecido", para induzir a vítima a uma ação perigosa).

Dica de prova: phishing é sempre citado como o exemplo número 1 de engenharia social — associe imediatamente engenharia social a "manipulação humana", não a falha técnica de sistema.`,
        checklist: ['Conheço técnicas de phishing', 'Entendi engenharia social'],
      },
      {
        id: 'm6a4',
        moduloId: 'm6',
        titulo: 'Malware',
        resumo: 'Vírus, worm, trojan, ransomware, spyware, rootkit, keylogger.',
        conteudo: `Malware (software malicioso) é qualquer programa criado com intenção de causar dano, roubar dados ou obter acesso não autorizado. Principais tipos:

- Vírus — precisa de um hospedeiro (um arquivo ou programa) para se propagar; requer ação do usuário (executar o arquivo infectado) para se ativar.
- Worm — se auto-replica e se espalha SOZINHO pela rede, sem precisar de um hospedeiro ou ação do usuário, explorando vulnerabilidades de rede.
- Trojan (cavalo de troia) — se disfarça de programa legítimo/útil, mas executa ações maliciosas ocultas quando instalado; não se auto-replica como vírus/worm.
- Ransomware — sequestra os arquivos da vítima (geralmente criptografando-os) e exige pagamento de resgate para liberar o acesso.
- Spyware — espiona as atividades do usuário sem seu conhecimento (histórico de navegação, dados pessoais) e envia essas informações a terceiros.
- Rootkit — se esconde profundamente no sistema operacional (muitas vezes em nível de kernel), ocultando sua própria presença e a de outros malwares, dificultando a detecção.
- Keylogger — registra as teclas digitadas pelo usuário, usado tipicamente para roubar senhas e dados sensíveis.

Dica de prova: a frase-chave para diferenciar é "worm se auto-replica sem hospedeiro; vírus precisa de hospedeiro e ação do usuário; trojan parece legítimo mas esconde algo malicioso" — praticamente toda questão de malware gira em torno dessa distinção.`,
        checklist: ['Diferenciei os tipos de malware'],
      },
      {
        id: 'm6a5',
        moduloId: 'm6',
        titulo: 'DoS, DDoS, SQL Injection e XSS',
        resumo: 'Principais tipos de ataque.',
        conteudo: `DoS (Denial of Service / Negação de Serviço) — ataque que busca sobrecarregar um sistema ou serviço com tráfego excessivo, tornando-o indisponível para usuários legítimos. Vem de uma única origem.

DDoS (Distributed Denial of Service) — semelhante ao DoS, mas o ataque vem de múltiplas origens simultaneamente (geralmente uma rede de computadores infectados, chamada botnet), tornando muito mais difícil de bloquear e mitigar.

SQL Injection — ataque que explora falhas em aplicações que constroem consultas SQL diretamente a partir de dados fornecidos pelo usuário, sem validação adequada. O atacante injeta código SQL malicioso através de campos de entrada.
Exemplo clássico: um campo de login vulnerável onde o atacante digita algo como ' OR '1'='1 para burlar a autenticação, fazendo a consulta sempre retornar verdadeiro.
Prevenção: uso de consultas parametrizadas (prepared statements) e validação de entrada.

XSS (Cross-Site Scripting) — ataque que injeta scripts maliciosos (geralmente JavaScript) em páginas web visualizadas por outros usuários, explorando a confiança do navegador no conteúdo do site. Pode roubar cookies de sessão, redirecionar usuários ou executar ações em nome da vítima.

Outros ataques importantes: força bruta (tentar todas as combinações possíveis de senha até acertar), man-in-the-middle (o atacante se posiciona entre duas partes de uma comunicação, interceptando ou alterando os dados), sniffing (captura de tráfego de rede para análise, muitas vezes maliciosa).

Dica de prova: DoS = uma origem; DDoS = múltiplas origens (botnet) — é a diferença mais cobrada; SQL Injection explora entrada de dados sem validação, XSS explora execução de script no navegador de outra vítima.`,
        checklist: ['Entendi DoS/DDoS', 'Entendi SQL Injection e XSS'],
      },
      {
        id: 'm6a6',
        moduloId: 'm6',
        titulo: 'Criptografia simétrica e assimétrica',
        resumo: 'AES, DES, RSA.',
        conteudo: `Criptografia é a técnica de transformar informação legível (texto claro) em uma forma ilegível (texto cifrado), protegendo-a de acessos não autorizados, e revertê-la de volta com a chave correta.

Criptografia simétrica — usa a MESMA chave para cifrar e decifrar os dados. É mais rápida, mas exige que emissor e receptor compartilhem a chave de forma segura previamente (o que é um desafio: como transmitir a chave sem interceptação?).
Exemplos: AES (Advanced Encryption Standard, o padrão atual, considerado muito seguro) e DES (Data Encryption Standard, mais antigo e hoje considerado inseguro devido ao tamanho pequeno da chave).

Criptografia assimétrica — usa um PAR de chaves matematicamente relacionadas: uma chave pública (pode ser compartilhada livremente) e uma chave privada (deve ser mantida em segredo). O que é cifrado com uma chave só pode ser decifrado com a outra do par.
Exemplo: RSA (o algoritmo assimétrico mais conhecido).
Uso típico: para confidencialidade, cifra-se com a chave pública do destinatário (só ele, com a chave privada, consegue decifrar); para autenticidade/assinatura digital, cifra-se com a chave privada do remetente (qualquer um com a chave pública pode verificar que só ele poderia ter cifrado aquilo).

Comparação: simétrica é mais rápida mas tem o problema de distribuição segura da chave; assimétrica resolve esse problema, mas é mais lenta computacionalmente. Por isso, sistemas reais (como o HTTPS) costumam usar os dois: assimétrica para trocar uma chave simétrica de forma segura, e depois simétrica para o restante da comunicação (mais rápida).

Dica de prova: "simétrica = 1 chave (rápida); assimétrica = 2 chaves, pública e privada (mais segura para troca de chaves)" é a distinção mais cobrada.`,
        checklist: ['Diferenciei simétrica de assimétrica', 'Conheço AES, DES e RSA'],
      },
      {
        id: 'm6a7',
        moduloId: 'm6',
        titulo: 'Hashing',
        resumo: 'MD5, SHA.',
        conteudo: `Hashing é uma função matemática que transforma uma entrada de qualquer tamanho em uma saída de tamanho fixo (o "hash" ou "resumo"), com características importantes:

- É unidirecional (não é possível reverter o hash para obter o dado original — diferente da criptografia, que é reversível com a chave)
- Uma pequena mudança na entrada gera um hash completamente diferente (efeito avalanche)
- Idealmente, é muito difícil que duas entradas diferentes gerem o mesmo hash (colisão)

Usos principais:
- Verificação de integridade — comparar o hash de um arquivo antes e depois de uma transferência para confirmar que não houve alteração/corrupção
- Armazenamento de senhas — sistemas bem projetados armazenam o HASH da senha (nunca a senha em texto puro); ao fazer login, o sistema calcula o hash da senha digitada e compara com o hash armazenado
- Assinatura digital — geralmente se assina o hash de um documento (menor e mais rápido de processar que o documento inteiro), não o documento completo

Algoritmos de hash comuns:
- MD5 — mais antigo, hoje considerado inseguro para fins criptográficos (vulnerável a colisões), mas ainda usado para verificação simples de integridade
- SHA (SHA-1, SHA-256, SHA-3) — família mais moderna e segura; SHA-256 é amplamente usado atualmente

Dica de prova: "hash é unidirecional, não pode ser revertido; criptografia é bidirecional (com a chave certa)" é a diferença conceitual mais cobrada — cuidado para não confundir os dois conceitos.`,
        checklist: ['Entendi o conceito de hash'],
      },
      {
        id: 'm6a8',
        moduloId: 'm6',
        titulo: 'Certificados digitais e PKI',
        resumo: 'CA, assinatura digital, SSL/TLS.',
        conteudo: `Certificado digital é um documento eletrônico que associa uma chave pública a uma entidade (pessoa, empresa, servidor), emitido e assinado por uma autoridade confiável, garantindo que a chave pública realmente pertence a quem diz pertencer.

PKI (Public Key Infrastructure / Infraestrutura de Chaves Públicas) é o conjunto de tecnologias, políticas e procedimentos necessários para criar, gerenciar, distribuir e revogar certificados digitais.

CA (Certificate Authority / Autoridade Certificadora) — entidade confiável responsável por emitir e assinar certificados digitais, atestando a identidade do solicitante. No Brasil, exemplos incluem a ICP-Brasil (para certificados oficiais).

Assinatura digital — usa criptografia assimétrica para garantir autenticidade (quem assinou é realmente quem diz ser), integridade (o documento não foi alterado) e não-repúdio (o autor não pode negar ter assinado). Funciona calculando o hash do documento e cifrando esse hash com a chave privada do assinante; qualquer pessoa pode verificar usando a chave pública correspondente.

SSL/TLS (Secure Sockets Layer / Transport Layer Security) — protocolos que usam certificados digitais para estabelecer conexões seguras e criptografadas na internet (é o que torna o HTTPS seguro). O TLS é a versão mais moderna e segura, tendo substituído o SSL (considerado obsoleto/inseguro).

Dica de prova: relacione certificado digital → CA (quem emite) → assinatura digital (o que ele viabiliza) → HTTPS/TLS (onde é usado na prática) — essa cadeia de conceitos costuma aparecer interligada em uma mesma questão.`,
        checklist: ['Entendi certificados digitais', 'Conheço PKI'],
      },
      {
        id: 'm6a9',
        moduloId: 'm6',
        titulo: 'Firewall, IDS, IPS e VPN',
        resumo: 'Tipos e funcionamento.',
        conteudo: `Revisão e aprofundamento dos principais mecanismos de defesa de rede (complementa o conteúdo de Redes):

Firewall — controla o tráfego de rede com base em regras predefinidas (IP, porta, protocolo). Tipos:
- Filtro de pacotes — analisa cada pacote isoladamente, sem contexto (mais simples e rápido, porém menos sofisticado)
- Firewall com estado (stateful) — acompanha o estado de cada conexão (por exemplo, sabe que um pacote de resposta pertence a uma conexão já estabelecida), oferecendo mais segurança e contexto
- Firewall de aplicação (proxy/WAF) — analisa o conteúdo em nível de aplicação (ex: bloquear um ataque de SQL Injection em uma requisição HTTP)

IDS (Intrusion Detection System) — monitora e detecta atividades suspeitas, mas apenas ALERTA, não bloqueia ativamente.

IPS (Intrusion Prevention System) — detecta E bloqueia ativamente o tráfego malicioso em tempo real, geralmente posicionado diretamente no caminho do tráfego (in-line).

VPN (Virtual Private Network) — cria um túnel criptografado sobre uma rede pública, permitindo comunicação segura entre pontos remotos como se estivessem na mesma rede local, muito usada para acesso remoto seguro a redes corporativas.

Antivírus — software que detecta, bloqueia e remove malwares conhecidos (geralmente baseado em assinaturas/padrões conhecidos) e, em versões mais modernas, também usa heurística e comportamento para detectar ameaças novas (zero-day).

Dica de prova: memorize "IDS detecta e alerta (passivo); IPS detecta e bloqueia (ativo)" — é reforçado tanto no módulo de redes quanto no de segurança, sinal de que é bastante cobrado.`,
        checklist: ['Conheço tipos de firewall', 'Diferenciei IDS de IPS'],
      },
      {
        id: 'm6a10',
        moduloId: 'm6',
        titulo: 'Privacidade, LGPD e segurança móvel',
        resumo: 'Cookies, dados pessoais, dispositivos móveis.',
        conteudo: `Privacidade na internet envolve o controle sobre quais dados pessoais são coletados, como são usados e com quem são compartilhados.

Cookies — pequenos arquivos que sites armazenam no navegador do usuário para lembrar informações entre visitas (login, preferências, carrinho de compras). Podem também ser usados para rastreamento de comportamento (cookies de terceiros, usados para publicidade direcionada), o que levanta questões de privacidade.

LGPD (Lei Geral de Proteção de Dados, Lei 13.709/2018) — legislação brasileira que regula o tratamento de dados pessoais por empresas e órgãos públicos. Noções básicas:
- Dado pessoal — qualquer informação relacionada a uma pessoa identificada ou identificável
- Titular dos dados — a pessoa a quem os dados pertencem
- Consentimento — em geral, o tratamento de dados pessoais exige consentimento claro e específico do titular
- Direitos do titular — acesso, correção, exclusão e portabilidade dos próprios dados
- Existe uma autoridade responsável pela fiscalização da lei no Brasil (ANPD — Autoridade Nacional de Proteção de Dados)

Segurança em dispositivos móveis — ameaças específicas incluem: aplicativos maliciosos (fora de lojas oficiais), redes Wi-Fi públicas não seguras, perda/roubo do aparelho (daí a importância de bloqueio de tela e criptografia do dispositivo), e phishing via SMS (smishing).
Boas práticas: manter o sistema e apps atualizados, usar autenticação de dois fatores, evitar redes Wi-Fi públicas para operações sensíveis, instalar apps apenas de lojas oficiais.

Dica de prova: LGPD é um tema relativamente novo e cada vez mais cobrado — saiba pelo menos os conceitos-chave (dado pessoal, titular, consentimento) mesmo em nível introdutório.`,
        checklist: ['Conheço noções de LGPD', 'Conheço segurança em dispositivos móveis'],
      },
    ],
  },
];
