import type { ProjectArtKind } from "@/content/projects";

const stroke = "var(--ember)";

function SocialArt() {
  return (
    <g>
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={70 + col * 62}
              y={54 + row * 62}
              width="50"
              height="50"
              rx="12"
            />
          )),
        )}
      </g>
      <rect x={70} y={54} width="50" height="50" rx="12" fill={stroke} opacity="0.9" />
      <rect x={194} y={116} width="50" height="50" rx="12" fill={stroke} opacity="0.35" />
      <circle cx="95" cy="79" r="15" fill="#07070a" opacity="0.35" />
      <path
        d="M95 79c26 0 74 6 99 37"
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
        strokeDasharray="5 7"
        strokeLinecap="round"
       
      />
      <path d="M84 236h54m14 0h72m14 0h48" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.3" />
      <path d="M84 236h54" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

function EditorArt() {
  return (
    <g>
      <rect x="54" y="42" width="200" height="216" rx="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path
        d="M82 92h84M82 118h132M82 144h66M82 170h112M82 196h48"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.22"
      />
      <path d="M82 144h66" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
      <path d="M170 92v104" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M200 118v52" stroke="var(--faint)" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="44" y="82" width="76" height="30" rx="8" fill={stroke} opacity="0.14" />
      <rect x="286" y="150" width="66" height="66" rx="12" fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.7" />
      <path d="M304 178h30M304 190h18" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="317" cy="166" r="3" fill={stroke} />
    </g>
  );
}

function ArenaArt() {
  return (
    <g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.28">
        <circle cx="200" cy="150" r="128" />
        <circle cx="200" cy="150" r="92" />
        <circle cx="200" cy="150" r="56" />
      </g>
      <circle cx="200" cy="150" r="56" fill={stroke} opacity="0.06" />
      <path
        d="M200 22v256M72 150h256"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.14"
        strokeDasharray="4 8"
      />
      <g stroke={stroke} strokeWidth="1.4" opacity="0.75" fill="none">
        <path d="M200 128v-30" strokeWidth="3" strokeLinecap="round" />
        <path d="M186 154 200 128l14 26-14 12z" fill={stroke} fillOpacity="0.9" stroke="none" />
      </g>
      <g fill="currentColor" opacity="0.5">
        <path d="M110 96 120 112h-20z" />
        <path d="M292 200 302 216h-20z" />
        <path d="M124 214 134 230h-20z" />
      </g>
      <g fill={stroke}>
        <circle cx="200" cy="86" r="3.4" />
        <circle cx="200" cy="72" r="3" opacity="0.7" />
        <circle cx="200" cy="58" r="2.6" opacity="0.4" />
      </g>
      <g stroke={stroke} strokeWidth="1.2" opacity="0.5" fill="none" strokeLinecap="round">
        <path d="M104 84h-16M110 96H86" strokeDasharray="6 8" />
      </g>
    </g>
  );
}

function TilesArt() {
  const layers = [
    { y: 196, x: 56, opacity: 0.28 },
    { y: 158, x: 40, opacity: 0.16 },
    { y: 120, x: 72, opacity: 0.1 },
  ];

  return (
    <g>
      {layers.map((layer) => (
        <g key={layer.y} opacity={layer.opacity}>
          {[0, 1, 2, 3].map((index) => (
            <rect
              key={index}
              x={layer.x + index * 74}
              y={layer.y}
              width="64"
              height="34"
              rx="7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          ))}
        </g>
      ))}
      <rect x="130" y="120" width="64" height="34" rx="7" fill={stroke} fillOpacity="0.85" />
      <rect x="278" y="196" width="64" height="34" rx="7" fill={stroke} fillOpacity="0.3" />
      <path
        d="M162 137c34 0 92 18 148 76"
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
        strokeDasharray="5 7"
        strokeLinecap="round"
       
      />
      <circle cx="162" cy="137" r="3" fill={stroke} />
      <circle cx="310" cy="213" r="3" fill={stroke} />
    </g>
  );
}

function StoreArt() {
  return (
    <g>
      <rect x="62" y="62" width="176" height="200" rx="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32" />
      <path d="M62 98h176" stroke="currentColor" strokeWidth="1" opacity="0.32" />
      <path
        d="M82 128h90M82 150h120M82 172h72"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path d="M82 216h136" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 6" opacity="0.4" />
      <path d="M82 216h74" stroke={stroke} strokeWidth="1.4" />
      <g fill={stroke}>
        <rect x="82" y="228" width="4" height="18" opacity="0.9" />
        <rect x="90" y="228" width="2" height="18" opacity="0.6" />
        <rect x="96" y="228" width="6" height="18" opacity="0.9" />
        <rect x="106" y="228" width="3" height="18" opacity="0.6" />
        <rect x="113" y="228" width="5" height="18" opacity="0.9" />
        <rect x="122" y="228" width="2" height="18" opacity="0.6" />
        <rect x="128" y="228" width="6" height="18" opacity="0.9" />
      </g>
      <g transform="translate(252 108)">
        <path
          d="M0 0h34l-4 40a10 10 0 0 1-10 9H14A10 10 0 0 1 4 40Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.6"
          opacity="0.9"
        />
        <path d="M10 0a7 7 0 1 1 14 0" fill="none" stroke={stroke} strokeWidth="1.6" transform="translate(0 -2)" />
      </g>
      <g stroke={stroke} strokeWidth="1.6" opacity="0.8" fill="none" strokeLinecap="round">
        <circle cx="300" cy="196" r="14" />
        <path d="M270 232h60" />
      </g>
    </g>
  );
}

function KnowledgeArt() {
  return (
    <g>
      <g stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none">
        <rect x="112" y="44" width="150" height="104" rx="8" />
        <rect x="96" y="58" width="150" height="104" rx="8" />
      </g>
      <rect x="80" y="72" width="150" height="104" rx="8" fill="none" stroke={stroke} strokeWidth="1.4" />
      <path d="M100 100h84M100 120h110M100 140h62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.22" />
      <path d="M100 140h62" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <path d="M120 190v22m40-22v22m40-22v22m40-22v22" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="4 6" />
      <g fill="none" stroke={stroke} strokeWidth="1.3">
        <circle cx="120" cy="226" r="10" />
        <circle cx="200" cy="226" r="10" />
        <circle cx="280" cy="226" r="10" />
      </g>
      <circle cx="200" cy="226" r="4" fill={stroke} />
      <path d="M300 60h44a10 10 0 0 1 10 10v34a10 10 0 0 1-10 10h-24l-12 12v-12h-8a10 10 0 0 1-10-10V70a10 10 0 0 1 10-10Z" fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.8" />
      <path d="M312 86h32M312 100h18" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

function BimArt() {
  return (
    <g>
      <path d="M200 62 262 98v72l-62 36-62-36V98Z" fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.85" />
      <path d="M200 62v72m0 0 62-36m-62 36-62-36m62 36v72" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M138 134 200 98l62 36v40l-62 36-62-36Z" fill={stroke} opacity="0.08" />
      <g stroke="currentColor" strokeWidth="1" opacity="0.22">
        <path d="M56 214h288M56 246h288" />
        <path d="M92 198v62m56-62v62m56-62v62m56-62v62m56-62v62" />
      </g>
      <rect x="232" y="182" width="60" height="34" rx="4" fill="none" stroke={stroke} strokeWidth="1.4" />
      <circle cx="262" cy="199" r="3" fill={stroke} />
    </g>
  );
}

function VaultArt() {
  return (
    <g>
      <circle cx="200" cy="150" r="98" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.22" strokeDasharray="6 8" />
      <path d="M200 74c26 0 46 12 46 12v44c0 40-46 66-46 66s-46-26-46-66V86s20-12 46-12Z" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="200" cy="132" r="15" fill="none" stroke={stroke} strokeWidth="1.5" />
      <path d="M200 147v22" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <g fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.35">
        <circle cx="106" cy="86" r="9" />
        <circle cx="296" cy="96" r="9" />
        <circle cx="112" cy="222" r="9" />
        <circle cx="292" cy="214" r="9" />
      </g>
      <path d="M114 92l30 22m143-16-26 20m-118 96 26-22m114 12-24-20" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="4 6" />
    </g>
  );
}

function WaveformArt() {
  const bars = [22, 46, 78, 54, 96, 66, 108, 72, 42, 88, 58, 30];
  return (
    <g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2">
        <path d="M40 150h320" />
      </g>
      {bars.map((height, index) => (
        <rect
          key={index}
          x={64 + index * 23}
          y={150 - height / 2}
          width="7"
          height={height}
          rx="3.5"
          fill={index % 3 === 0 ? stroke : "currentColor"}
          opacity={index % 3 === 0 ? 0.9 : 0.28}
        />
      ))}
      <g opacity="0.28">
        <path d="M88 210h176" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M88 232h120" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M88 254h150" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </g>
      <path d="M88 210h96" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

function FlowArt() {
  return (
    <g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25">
        <path d="M56 92h96m-96 56h96m-96 56h96" />
      </g>
      <g fill="none" stroke={stroke} strokeWidth="1.3" opacity="0.75">
        <path d="M152 92c46 0 42 56 78 56m-78-56c46 0 42 0 78 0m-78 56c46 0 42-56 78-56" />
      </g>
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.4" fill="none">
        <rect x="152" y="80" width="26" height="24" rx="4" />
        <rect x="152" y="136" width="26" height="24" rx="4" />
        <rect x="152" y="192" width="26" height="24" rx="4" />
      </g>
      <rect x="238" y="126" width="112" height="64" rx="8" fill="none" stroke={stroke} strokeWidth="1.5" />
      <path d="M258 150h72M258 168h48" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" opacity="0.85" />
      <path d="M366 158h-8m0 0 6-6m-6 6 6 6" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="294" cy="108" r="3.5" fill={stroke} />
    </g>
  );
}

function ScanArt() {
  return (
    <g>
      <rect x="118" y="46" width="164" height="208" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32" />
      <path d="M138 90h58M138 118h104M138 146h72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.22" />
      <rect x="100" y="126" width="200" height="52" rx="6" fill={stroke} opacity="0.12" />
      <path d="M100 152h200" stroke={stroke} strokeWidth="1.6" strokeDasharray="7 6" />
      <g stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M92 118v-12h12m192 0h12v12m0 68v12h-12M104 198H92v-12" />
      </g>
      <path d="M138 146h72" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <path d="M138 210h88M138 232h52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.22" />
      <circle cx="300" cy="224" r="12" fill="none" stroke={stroke} strokeWidth="1.4" />
      <path d="M292 224l6 6 10-12" stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function VisionArt() {
  return (
    <g>
      <g stroke="currentColor" strokeWidth="1" opacity="0.22">
        <path d="M48 96h304M48 150h304M48 204h304" />
        <path d="M104 60v190m72-190v190m72-190v190m72-190v190" />
      </g>
      <path d="M92 84h96v44H92Zm0 66h72m-72 54h108" stroke="currentColor" strokeWidth="7" strokeLinecap="square" opacity="0.28" fill="none" />
      <rect x="196" y="166" width="104" height="70" rx="4" fill={stroke} opacity="0.1" />
      <rect x="196" y="166" width="104" height="70" rx="4" fill="none" stroke={stroke} strokeWidth="1.8" />
      <g stroke={stroke} strokeWidth="2.2" strokeLinecap="round">
        <path d="M188 158v-8h8m104 0h8v8m0 78v8h-8m-104 0h-8v-8" />
      </g>
      <circle cx="176" cy="104" r="16" fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.7" />
      <path d="M188 116l22 22" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </g>
  );
}

function CrawlArt() {
  return (
    <g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.22">
        <circle cx="200" cy="150" r="112" />
        <circle cx="200" cy="150" r="74" />
      </g>
      <g fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.55">
        <path d="M200 150 112 96m88 54 96-44m-96 44-58 66m58-66 78 52m-78-52v-84" />
      </g>
      <circle cx="200" cy="150" r="13" fill={stroke} />
      <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.45">
        <circle cx="112" cy="96" r="8" />
        <circle cx="296" cy="106" r="8" />
        <circle cx="142" cy="216" r="8" />
        <circle cx="278" cy="202" r="8" />
        <circle cx="200" cy="66" r="8" />
      </g>
      <path d="M236 132h44a10 10 0 0 1 10 10v26a10 10 0 0 1-10 10h-16l-10 10v-10h-18" fill="none" stroke={stroke} strokeWidth="1.3" opacity="0.75" />
    </g>
  );
}

function ConvertArt() {
  return (
    <g>
      <rect x="58" y="66" width="118" height="168" rx="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32" />
      <path d="M78 100h64M78 124h78M78 148h50M78 172h72M78 196h40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.2" />
      <path d="M182 150h34" stroke={stroke} strokeWidth="1.6" />
      <path d="M216 150h-8m8 0-6-6m6 6-6 6" stroke={stroke} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <g stroke={stroke} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M248 92v54m0 0h34m-34 0H232" />
      </g>
      <g stroke={stroke} strokeWidth="1.6" opacity="0.75" fill="none" strokeLinecap="round">
        <path d="M248 186h30" />
        <path d="M300 168v36" />
      </g>
      <path d="M246 238h96" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      <path d="M246 238h58" stroke={stroke} strokeWidth="1" />
      <g fill={stroke} opacity="0.85">
        <rect x="300" y="86" width="4" height="18" rx="2" />
        <rect x="308" y="86" width="10" height="18" rx="2" />
        <rect x="322" y="86" width="4" height="18" rx="2" />
      </g>
    </g>
  );
}

const art: Record<ProjectArtKind, () => React.JSX.Element> = {
  social: SocialArt,
  editor: EditorArt,
  arena: ArenaArt,
  tiles: TilesArt,
  store: StoreArt,
  knowledge: KnowledgeArt,
  bim: BimArt,
  vault: VaultArt,
  waveform: WaveformArt,
  flow: FlowArt,
  scan: ScanArt,
  vision: VisionArt,
  crawl: CrawlArt,
  convert: ConvertArt,
};

export function ProjectArt({
  kind,
  className,
}: {
  kind: ProjectArtKind;
  className?: string;
}) {
  const Art = art[kind];

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className ?? ""}`}
      style={{
        backgroundImage:
          "radial-gradient(120% 100% at 78% 8%, color-mix(in oklab, var(--ember) 16%, transparent), transparent 62%), linear-gradient(160deg, #14141c, #0a0a0f 70%)",
      }}
    >
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-hidden="true"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <Art />
      </svg>
    </div>
  );
}
